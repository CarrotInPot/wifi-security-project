import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">About Us</h1>
            <div className="about-content">
                <p>
                    Welcome to our Wi-Fi Security analysis project! The goal of this project was to develop an interactive tool to help home and business owners understand Wi-Fi security risks and vulnerabilities, and improve their network security performance. The system (prototype) provides recommendations based on the current Wi-Fi settings. Our research and analysis conducted throughout the year ensures we stay up to date with the latest security trends.
                </p>
                <p>
                    The system allows you to input/select your Wi-Fi configuration, such as authentication methods, cipher types, and usage scenarios (e.g. home, business, public). Based on your selection, the system provides tailored security recommendations and guidelines for best practices, ensuring that your network is secure/protected.
                </p>
                <p>
                    Additionally, you can view previously generated recommendations and learn more about how to view your Wi-Fi settings. We strive to provide you with the most comprehensive and practical advice for securing your network.
                </p>
                <p>
                    Our mission is to empower users with knowledge about their Wi-Fi network and provide actionable steps to establishing strong Wi-Fi security protocols. Together, we can create safer and more secure digital environments for everyone.
                </p>
                <p>
                    This is part of our final year project for the Bachelor of Engineering (Honours) Software Engineering Degree. Team members: Leon Lee, Henry Hu, and Samuel Meads. The project was supervised by Professor Nurul Sarkar.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
