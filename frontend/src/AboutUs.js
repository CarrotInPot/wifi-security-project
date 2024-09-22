import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">About Us</h1>
            <div className="about-content">
                <p>
                    Welcome to our WiFi Security Project! The goal of this project is to help users understand and improve their WiFi security by offering recommendations based on the current WiFi settings. Our research and analysis conducted throughout the year ensures we stay up-to-date with the latest security trends.
                </p>
                <p>
                    Our system allows you to input information about your WiFi configuration, such as authentication methods, cipher types, and usage scenarios (home, business, public, etc.). Based on this information, we provide tailored security recommendations to ensure that your network is as secure as possible.
                </p>
                <p>
                    Additionally, you can view previously generated recommendations and learn more about how to view your WiFi settings. We strive to provide you with the most comprehensive and practical advice for securing your network.
                </p>
                <p>
                    Our mission is to empower users with knowledge about their WiFi network and provide actionable steps to establishing strong WiFi security protocols. Together, we can create safer and more secure digital environments for everyone.
                </p>
                <p>
                    This is part of our final year project for the Bachelor of Engineering (Honours) - Software Engineering Degree. Team members: Leon Lee, Henry Hu, Samuel Meads.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
