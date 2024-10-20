import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './GeneralRecommendations.css'; // Import a CSS file for styling if needed

const GeneralRecommendations = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    const handleBack = () => {
        navigate('/input'); // Navigate back to the WiFi Security Analysis Framework (assuming it's the home route)
    };

    return (
        <div className="general-recommendations-container">
            <h2>Best Practices Guideline</h2>

            <h3 className="red-text">For All Wi-Fi Operating Environments: (eg. home, office)</h3>
            <ul>
                <li><strong>Use strong, regularly updated passwords</strong> to prevent unauthorized access.</li>
                <li><strong>Avoid personal information in SSID names</strong> and disable SSID broadcasting if unnecessary.</li>
                <li><strong>Regularly update firmware</strong> to address security vulnerabilities.</li>
                <li><strong>Use MAC filtering</strong> to control device access to the network.</li>
                <li><strong>Disable unnecessary services</strong> like UPnP and remote administration to reduce attack surfaces.</li>
            </ul>

            <h3 className="red-text">For Office and Retail:</h3>
            <ul>
                <li><strong>Implement Multi-Factor Authentication (MFA)</strong> to strengthen network access controls.</li>
                <li><strong>Segment networks</strong> (e.g., guest networks vs. internal networks) to contain security breaches.</li>
                <li><strong>Implement firewalls</strong> to monitor and filter traffic, preventing unauthorized access.</li>
                <li><strong>Use VPNs on public Wi-Fi</strong> to encrypt traffic and prevent eavesdropping.</li>
                <li><strong>Turn off remote management features</strong> unless necessary to prevent unauthorized access from external locations.</li>
            </ul>

            <button className="back-button" onClick={handleBack}>
                ﹤ Back
            </button>
        </div>
    );
};

export default GeneralRecommendations;
