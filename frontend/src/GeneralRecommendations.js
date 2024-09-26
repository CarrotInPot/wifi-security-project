import React from 'react';
import './GeneralRecommendations.css'; // Import a CSS file for styling if needed

const GeneralRecommendations = () => {
    return (
        <div className="general-recommendations-container">
            <h2>General Wi-Fi Security Best Practices</h2>
            <ul>
                <li><strong>Use strong, regularly updated passwords</strong> to prevent unauthorized access.</li>
                <li><strong>Avoid personal information in SSID names</strong> and disable SSID broadcasting if unnecessary.</li>
                <li><strong>Regularly update firmware</strong> to address security vulnerabilities.</li>
                <li><strong>Segment networks</strong> to contain security breaches (e.g., guest networks vs. internal networks).</li>
                <li><strong>Implement firewalls</strong> to monitor and filter traffic, preventing unauthorized access.</li>
                <li><strong>Use MAC filtering</strong> to control device access to the network.</li>
                <li><strong>Use VPNs on public Wi-Fi</strong> to encrypt traffic and prevent eavesdropping.</li>
                <li><strong>Disable unnecessary services</strong> like UPnP and remote administration to reduce attack surfaces.</li>
                <li><strong>Turn off remote management features</strong> unless necessary to prevent unauthorized access.</li>
                <li><strong>Implement Multi-Factor Authentication (MFA)</strong> to strengthen network access controls.</li>
            </ul>
        </div>
    );
};

export default GeneralRecommendations;
