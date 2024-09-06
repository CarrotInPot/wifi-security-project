// src/Footer.js
import React from 'react';
import './Footer.css';  // Assuming you have a dedicated CSS file for the footer styles

const Footer = () => {
    return (
        <footer className="home-footer">
            <div className="footer-content">
                <div className="about">
                    <h3>About SecureWiFi</h3>
                    <p>
                        SecureWiFi is dedicated to providing top-notch security solutions for your wireless networks.
                        Our recommendations are tailored to meet your specific needs, ensuring optimal protection and performance.
                    </p>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/wifisettings">How to view WiFi Settings</a></li>
                        <li><a href="/input">Input Information</a></li>
                        <li><a href="/recommendations">Saved Recommendations</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
