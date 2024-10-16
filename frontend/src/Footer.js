// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing
import './Footer.css';  // Assuming you have a dedicated CSS file for the footer styles

const Footer = () => {
    return (
        <footer className="home-footer">
            <div className="footer-content">
                <div className="about">
                    <h3>About SecureWi-Fi</h3>
                    <p>
                        SecureWi-Fi is dedicated to providing best practice security recommendations for your wireless networks.
                        Our recommendations are tailored to meet your specific needs, ensuring optimal protection and performance.
                    </p>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        {/* Use Link from react-router-dom to handle navigation properly */}
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
