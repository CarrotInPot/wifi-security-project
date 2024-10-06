import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import logo from './images/SecureWifiLogo.png';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();  // Initialize the hook

    const handleGetStarted = () => {
        navigate('/wifisettings');  // Navigate to /wifisettings
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="home-title">
                    <h1>Welcome to SecureWiFi</h1>
                    <img src={logo} alt="Logo" className="home-logo" />
                </div>
                <div className="home-description">
                    <p>
                       <strong> "An Interactive tool (prototype) for wireless network security analysis that Evaluates your Wi-Fi network security health" </strong>
                    </p>
                    <p>
                        It offers home Wi-Fi and businesses to test wireless security assessment and provide recommendations/guidelines for best practices.
                        Key Features include saved tailored recommendations, best practices for securing Wi-Fi networks, and responsive design.
                    </p>
                    <p>
                        Researchers and Developers: Samuel Meads, Leon Lee, Henry Hu
                    </p>
                    <p>
                        Supervisor: Prof. Nurul Sarkar
                    </p>
                    <p>
                        Last Updated: Semester 2 2024.
                    </p>
                    <button className="get-started-button" onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Home;
