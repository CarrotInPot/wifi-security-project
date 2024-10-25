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
                <h1>Welcome to SecureWi-Fi</h1>
                <img src={logo} alt="Logo" className="home-logo" />
                <div className="home-description">
                    <p>
                    <strong>
      <span style={{ color: 'red' }}>
      "An interactive tool (prototype) for wireless network security analysis and testing your Wi-Fi network's security health."
      </span>
   </strong>
                    </p>
                    <p>
                    The system allows both home Wi-Fi users and businesses to test the security status of their Wi-Fi networks, and it provides recommendations and guidelines for best practices. Key features include tailored recommendations, best practices for securing Wi-Fi networks, and a responsive design.
                    </p>
                    <p>
                        Researcher/Developer: Samuel Meads, Leon Lee, Henry Hu
                    </p>
                    <p>
                        Supervisor: Professor Nurul I. Sarkar
                    </p>
                    <p>
                        Last Updated: October 2024.
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
