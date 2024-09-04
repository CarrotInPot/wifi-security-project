import React, { useState } from 'react';
import './WiFiSetup.css';

const WiFiSetup = () => {
    const [authMethod, setAuthMethod] = useState('');
    const [cipher, setCipher] = useState('');
    const [usageType, setUsageType] = useState('');
    const [recommendation, setRecommendation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Normalize input (to handle case insensitivity)
        const normalizedAuthMethod = authMethod.toLowerCase();

        // Generate the recommendation based on the input
        if (usageType === '') {
            setRecommendation('Please select usage type.');
        }
        if (normalizedAuthMethod === 'wpa' || normalizedAuthMethod === 'wep' || normalizedAuthMethod === 'open'|| normalizedAuthMethod === 'owe') {
            if (usageType === 'public') {
                setRecommendation('Alert: Need to upgrade. Recommendation: WPA2-PSK with AES-128 CCMP or Opportunistic Wireless Encryption.');
            } else if (usageType === 'home') {
                setRecommendation('Alert: Need to upgrade. Recommendation: Use WPA2-PSK with AES-128 CCMP or transition to WPA3-SAE with AES-256 GCM Cipher.');
            } else if (usageType === 'retail') {
                setRecommendation('Alert: Need to upgrade. Recommendation: Upgrade to WPA2-PSK with AES-128 CCMP Cipher.');
            } else if (usageType === 'business') {
                setRecommendation('Alert: Need to upgrade. Recommendation: Upgrade to WPA2-Enterprise with AES-256 GCM Cipher.');
            }
        } else if (normalizedAuthMethod === 'wpa2') {
            if (usageType === 'public' || usageType === 'home' || usageType === 'retail') {
                setRecommendation('Recommendation: WPA2-PSK with AES-128 CCMP or transition to WPA3-SAE with AES-256 GCM Cipher.');
            } else if (usageType === 'business') {
                setRecommendation('Recommendation: Upgrade to WPA3-Enterprise with AES-256 GCM Cipher');
            }
        } else if (normalizedAuthMethod === 'wpa3') {
            if (usageType === 'public' || usageType === 'retail') {
                setRecommendation('This is the most secure and authentication standard for Public or Retail use.');
            } else if (usageType === 'home') {
                setRecommendation('Recommendation: WPA3-SAE with AES-256 GCM Cipher.');
            } else if (usageType === 'business') {
                setRecommendation('Recommendation: Using the most secure authentication standard. For further security use AES-256 GCM Cipher.');
            }
        } else if (normalizedAuthMethod === '') {
            setRecommendation('Please select an authentication method.');
        } else {
            setRecommendation('Invalid Input: Unsupported authentication method.');
        }
    };

    return (
        <div className="container">
            <div className="wifi-setup">
                <h2>WiFi Security Setup</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor="auth-method">Authentication Method</label>
                    <select id="auth-method" value={authMethod} onChange={(e) => setAuthMethod(e.target.value)}>
                        <option value="">Select Authentication Method</option>
                        <option value="open">Open</option>
                        <option value="owe">OWE</option>
                        <option value="wep">WEP</option>
                        <option value="wpa">WPA</option>
                        <option value="wpa2">WPA2</option>
                        <option value="wpa3">WPA3</option>
                    </select>
                    
                    <label htmlFor="cipher">Cipher</label>
                    <input
                        type="text"
                        id="cipher"
                        value={cipher}
                        onChange={(e) => setCipher(e.target.value)}
                        placeholder="Enter AES, TKIP, etc."
                    />

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
                    
                    <button type="submit">Submit</button>
                </form>
                {recommendation && (
                    <div className="recommendation">
                        <h3>Recommendation</h3>
                        <p>{recommendation}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WiFiSetup;
