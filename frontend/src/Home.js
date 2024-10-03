import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import modem from './images/modem.jpg';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();  // Initialize the hook

    const handleGetStarted = () => {
        navigate('/wifisettings');  // Navigate to /wifisettings
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to SecureWiFi</h1>
                <p>
                Welcome to SecureWiFi: <strong> An Interactive tool (prototype) for wireless network security analysis </strong> that Evaluates your Wi-Fi network security health.
                </p>
                <p>
                It offers home Wi-Fi and businesses to test wireless security assessment and provide recommendations/guidelines for best practices.
Key Features include saved tailored recommendations, best practices for securing Wi-Fi networks, and responsive design.
                </p>
                <button className="get-started-button" onClick={handleGetStarted}>
                    Get Started
                </button>
            </header>
            <div className="home-image-section">
                <img src={modem} alt="Desk Setup" />
            </div>
        </div>
    );
};

export default Home;
