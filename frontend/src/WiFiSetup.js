import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './WiFiSetup.css';

const WiFiSetup = () => {
    const [securityType, setSecurityType] = useState('');
    const [encryptionType, setEncryptionType] = useState('');
    const [usageType, setUsageType] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [showGeneralButton, setShowGeneralButton] = useState(false); // State to control visibility of the button
    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!securityType || !encryptionType || !usageType) {
            setRecommendation('Please fill out all fields before submitting.');
            return; // Exit the function if any field is empty
        }

        // Normalize input (to handle case insensitivity)
        const normalizedSecurityType = securityType.toLowerCase();

        let newRecommendation = '';

        // Generate the recommendation based on the input
        if (normalizedSecurityType === 'wpa' || normalizedSecurityType === 'wep' || normalizedSecurityType === 'open' || normalizedSecurityType === 'owe') {
            if (usageType === 'public') {
                newRecommendation = 'Alert: Need to upgrade. Recommendation: WPA2-PSK with AES-128 CCMP or Opportunistic Wireless Encryption.';
            } else if (usageType === 'home') {
                newRecommendation = 'Alert: Need to upgrade. Recommendation: Use WPA2-PSK with AES-128 CCMP or transition to WPA3-SAE with AES-256 GCM Cipher.';
            } else if (usageType === 'retail') {
                newRecommendation = 'Alert: Need to upgrade. Recommendation: Upgrade to WPA2-PSK with AES-128 CCMP Cipher.';
            } else if (usageType === 'business') {
                newRecommendation = 'Alert: Need to upgrade. Recommendation: Upgrade to WPA2-Enterprise with AES-256 GCM Cipher.';
            }
        } else if (normalizedSecurityType === 'wpa2') {
            if (usageType === 'public' || usageType === 'home' || usageType === 'retail') {
                newRecommendation = 'Recommendation: WPA2-PSK with AES-128 CCMP or transition to WPA3-SAE with AES-256 GCM Cipher.';
            } else if (usageType === 'business') {
                newRecommendation = 'Recommendation: Upgrade to WPA3-Enterprise with AES-256 GCM Cipher';
            }
        } else if (normalizedSecurityType === 'wpa3') {
            if (usageType === 'public' || usageType === 'retail') {
                newRecommendation = 'This is the most secure and authentication standard for Public or Retail use.';
            } else if (usageType === 'home') {
                newRecommendation = 'Recommendation: WPA3-SAE with AES-256 GCM Cipher.';
            } else if (usageType === 'business') {
                newRecommendation = 'Recommendation: Using the most secure authentication standard. For further security use AES-256 GCM Cipher.';
            }
        } else if (normalizedSecurityType === '') {
            newRecommendation = 'Please select a security type.';
        } else {
            newRecommendation = 'Invalid Input: Unsupported security type.';
        }

        // Set the new recommendation to state
        setRecommendation(newRecommendation);

        // Show the "View General Recommendations" button only after submit is pressed
        setShowGeneralButton(true);

        // Save recommendation to localStorage only if all fields are valid and filled
        if (securityType && encryptionType && usageType) {
            const previousRecommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
            const recommendationData = {
                securityType,
                encryptionType,
                usageType,
                recommendation: newRecommendation,
                timestamp: new Date().toLocaleString(),
            };
            previousRecommendations.push(recommendationData);
            localStorage.setItem('recommendations', JSON.stringify(previousRecommendations));
        }
    };

    // Function to navigate to the General Recommendations page
    const handleGeneralRecommendations = () => {
        navigate('/general-recommendations'); // Navigate to the general recommendations page
    };

    return (
        <div className="container">
            <div className="wifi-setup">
                <h2>WiFi Security Setup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="security-type">Security Type</label>
                    <select id="security-type" value={securityType} onChange={(e) => setSecurityType(e.target.value)}>
                        <option value="">Select Security Type</option>
                        <option value="open">Open</option>
                        <option value="owe">OWE</option>
                        <option value="wep">WEP</option>
                        <option value="wpa">WPA</option>
                        <option value="wpa2">WPA2</option>
                        <option value="wpa3">WPA3</option>
                    </select>
                    
                    <label htmlFor="encryption-type">Encryption Type</label>
                    <select id="encryption-type" value={encryptionType} onChange={(e) => setEncryptionType(e.target.value)}>
                        <option value="">Select Encryption Type</option>
                        <option value="AES">AES</option>
                        <option value="TKIP">TKIP</option>
                        <option value="CCMP">CCMP</option>
                        <option value="GCMP">GCMP</option>
                    </select>

                    <label>Usage Type</label>
                    <div className="radio-group">
                        <label>
                            <input 
                                type="radio" 
                                name="usage" 
                                value="home" 
                                checked={usageType === 'home'}
                                onChange={(e) => setUsageType(e.target.value)}
                            /> 
                            Home
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="usage" 
                                value="public" 
                                checked={usageType === 'public'}
                                onChange={(e) => setUsageType(e.target.value)}
                            /> 
                            Public
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="usage" 
                                value="retail" 
                                checked={usageType === 'retail'}
                                onChange={(e) => setUsageType(e.target.value)}
                            /> 
                            Retail
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="usage" 
                                value="business" 
                                checked={usageType === 'business'}
                                onChange={(e) => setUsageType(e.target.value)}
                            /> 
                            Business
                        </label>
                    </div>
                    
                    <button type="submit">Generate Recommendation</button>
                </form>
                {recommendation && (
                    <div className="recommendation">
                        <h3>Tailored Recommendation:</h3>
                        <p>{recommendation}</p>
                        {/* Button to navigate to the General Recommendations page */}
                        {showGeneralButton && (
                            <button 
                                className="general-recommendation-button" 
                                onClick={handleGeneralRecommendations}>
                                View General Recommendations
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WiFiSetup;
