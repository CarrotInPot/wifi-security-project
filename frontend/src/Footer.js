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
                        <li><a href="/wifi-security-project/about">About Us</a></li>
                        <li><a href="/wifi-security-project/terms-and-conditions">Terms & Conditions</a></li>
                        <li><a href="/wifi-security-project/faqs">FAQs</a></li>
                        <li><a href="/wifi-security-project/privacy-policy">Privacy Policy</a></li>
                    </ul>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
