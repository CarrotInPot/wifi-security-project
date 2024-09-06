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
                    SecureWiFi provides you with the best recommendations for setting up a secure wireless network.
                    Start by inputting your information, and let us help you secure your home, public, retail or business network.
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
