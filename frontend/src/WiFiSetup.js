import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './WiFiSetup.css';

const WiFiSetup = () => {
    const [securityType, setSecurityType] = useState('');
    const [encryptionType, setEncryptionType] = useState('');
    const [usageType, setUsageType] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [showGeneralButton, setShowGeneralButton] = useState(false); // State to control visibility of the button
    const [sectionColor, setSectionColor] = useState(''); // State to store section background color
    const [alertMessage, setAlertMessage] = useState(''); // State to store alert message
    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all required fields are filled
        if (!securityType || !encryptionType || !usageType) {
            setRecommendation('Please fill out all fields before submitting.');
            setShowGeneralButton(false); // Don't show the general recommendations button
            setAlertMessage('');
            return; // Exit the function if any field is empty
        }
    
        let newRecommendation = '';
        let alert = '';

        // Normalize input (to handle case insensitivity)
        const normalizedSecurityType = securityType.toLowerCase();
        const normalizedEncryptionType = encryptionType.toLowerCase();
    
        // Generate the recommendation based on security type, encryption type, and usage type
        if (normalizedSecurityType === 'wpa' || normalizedSecurityType === 'open' || normalizedSecurityType === 'wep') {
            if (normalizedEncryptionType === 'aes' || normalizedEncryptionType === 'ccmp' || normalizedEncryptionType === 'gcmp') {
                if (usageType === 'public') {
                    newRecommendation = 'Your current setup is outdated and highly vulnerable to attacks. Public networks are often targeted by hackers, and upgrading to WPA2-PSK with AES-128 CCMP or Opportunistic Wireless Encryption is essential for keeping users safe and protecting sensitive information. You can change these settings in your Wi-Fi router’s admin panel or contact an IT professional for assistance.';
                } else if (usageType === 'home') {
                    newRecommendation = 'Your current home Wi-Fi setup is outdated and insecure. Upgrading to WPA2-PSK with AES-128 CCMP will offer better protection, but we highly recommend transitioning to WPA3-SAE with AES-256 GCM Cipher for the strongest security. Access your Wi-Fi router settings to apply these changes, or contact an IT professional for help.';
                } else if (usageType === 'retail') {
                    newRecommendation = 'Retail environments are vulnerable to security breaches, especially with outdated Wi-Fi setups. Upgrading to WPA2-PSK with AES-128 CCMP Cipher is necessary to secure your business and protect customer data. You can update your router settings or reach out to an IT professional to ensure proper configuration.';
                } else if (usageType === 'business') {
                    newRecommendation = 'Your current business network is at serious risk of being breached. Upgrading to WPA2-Enterprise with AES-256 GCM Cipher offers a higher level of security tailored for businesses. It’s best to consult with an IT professional to ensure that these changes are correctly implemented.';
                }
            } else if (normalizedEncryptionType === 'tkip') {
                newRecommendation = 'Warning: Your security protocol and encryption method (TKIP) is outdated and no longer considered secure. Attackers can easily exploit vulnerabilities in this encryption. Upgrading to WPA2 or WPA3 with modern encryption standards like AES-CCMP or AES-GCMP is critical. You can change this in your router’s settings or contact an IT professional.';
            }
            setSectionColor('#E23F44'); // Set section background color to a lighter red for WPA, WEP, and Open
            alert = 'Major Alert! Immediate action required!';
        } else if (normalizedSecurityType === 'wpa2') {
            if (normalizedEncryptionType === 'aes' || normalizedEncryptionType === 'ccmp' || normalizedEncryptionType === 'gcmp') {
                if (usageType === 'public' || usageType === 'home' || usageType === 'retail') {
                    newRecommendation = 'Your Wi-Fi is reasonably secure but could be improved. We recommend upgrading from WPA2-PSK with AES-128 CCMP to WPA3-SAE with AES-256 GCM Cipher for stronger protection, particularly against emerging threats. Update your router settings to enable WPA3 or contact an IT professional for assistance.';
                } else if (usageType === 'business') {
                    newRecommendation = 'While WPA2 is a decent standard, businesses should upgrade to WPA3-Enterprise with AES-256 GCM Cipher for maximum security. This upgrade will better protect sensitive business data. Reach out to an IT professional to implement these changes.';
                }
            } else if (normalizedEncryptionType === 'tkip') {
                newRecommendation = 'Warning: TKIP is outdated and insecure. It is important to transition to WPA2-PSK with AES or upgrade to WPA3 with AES-256 GCM Cipher to avoid vulnerabilities. You can make these changes via your router’s admin settings or with the help of an IT professional.';
            }
            setSectionColor('orange'); // Set section background color to orange for WPA2
            alert = 'Medium Alert! Consider upgrading for better security';
        } else if (normalizedSecurityType === 'wpa3' || normalizedSecurityType === 'owe') {
            if (normalizedEncryptionType === 'aes' || normalizedEncryptionType === 'gcmp' || normalizedEncryptionType === 'ccmp') {
                if (usageType === 'public' || usageType === 'retail') {
                    newRecommendation = 'You are using the most secure Wi-Fi standard available for public or retail networks. WPA3 with AES-256 GCM Cipher provides robust protection against unauthorized access and cyberattacks, making it the best choice for environments where security is a top priority. No immediate changes are needed, but ensure that your network settings are configured properly.';
                } else if (usageType === 'home') {
                    newRecommendation = 'Your Wi-Fi setup is highly secure. WPA3-SAE with AES-256 GCM Cipher offers excellent protection for your home network, keeping your devices and personal data safe from potential intruders. Check your router settings to ensure everything is configured correctly.';
                } else if (usageType === 'business') {
                    newRecommendation = 'You are using the most secure authentication standard available. For maximum security in a business environment, continue using WPA3-Enterprise with AES-256 GCM Cipher to safeguard sensitive information and protect against cyber threats. Contact your IT team for ongoing network monitoring.';
                }
            } else if (normalizedEncryptionType === 'tkip') {
                newRecommendation = 'Your Wi-Fi setup is highly secure; however, TKIP is outdated and insecure. It is important to transition to WPA3 with AES-256 GCM Cipher to avoid vulnerabilities that hackers can exploit. Consult with an IT professional to implement this change if needed.';
            }
            setSectionColor('#90EE90'); // Set section background color to green for WPA3 and OWE
            alert = 'Low Alert. Your Wi-Fi is secure.';
        } else {
            newRecommendation = 'Invalid Input: Unsupported security type or encryption type. Please check your settings or consult an IT professional.';
        }
    
        // Set the new recommendation and alert message to state
        setRecommendation(newRecommendation);
        setAlertMessage(alert);
    
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
                <h2>WiFi Security Analysis Framework</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="security-type">Security Protocol (WEP, WPA2, etc.)</label>
                    <select id="security-type" value={securityType} onChange={(e) => setSecurityType(e.target.value)}>
                        <option value="">Select Security Protocol</option>
                        <option value="open">Open</option>
                        <option value="owe">OWE</option>
                        <option value="wep">WEP</option>
                        <option value="wpa">WPA</option>
                        <option value="wpa2">WPA2</option>
                        <option value="wpa3">WPA3</option>
                    </select>
                    
                    <label htmlFor="encryption-type">Encryption Type (AES, TKIP, etc.)</label>
                    <select id="encryption-type" value={encryptionType} onChange={(e) => setEncryptionType(e.target.value)}>
                        <option value="">Select Encryption Type</option>
                        <option value="AES">AES</option>
                        <option value="TKIP">TKIP</option>
                        <option value="CCMP">CCMP</option>
                        <option value="GCMP">GCMP</option>
                    </select>

                    <label>Usage</label>
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
                
                {/* Display the recommendation if it's not the 'Please fill out all fields' message */}
                {recommendation && (
                    <div className="recommendation" style={{ backgroundColor: sectionColor }}>
                        <h3>{alertMessage}</h3> {/* Show the alert message */}
                        <p>{recommendation}</p>
                        
                        {/* Show the router/modem limitation note only if fields are filled */}
                        {recommendation !== 'Please fill out all fields before submitting.' && (
                            <p style={{ fontSize: '0.85em', marginTop: '10px' }}>
                                * The security level you can implement may depend on the capabilities of your router or modem. 
                                Older devices might not support the latest standards like WPA3. If your device doesn’t support the recommended security protocols, 
                                it may be necessary to upgrade your router or modem to ensure optimal protection. 
                                Please check the manufacturer's specifications for your router or consult an IT professional for further assistance.
                            </p>
                        )}

                        {/* Button to navigate to the General Recommendations page */}
                        {showGeneralButton && (
                            <button     
                                className="general-recommendation-button" 
                                onClick={handleGeneralRecommendations}>
                                View General Best Practices
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WiFiSetup;
