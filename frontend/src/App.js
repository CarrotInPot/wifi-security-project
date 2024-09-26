import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import WiFiSetup from './WiFiSetup';
import WiFiSettings from './WiFiSettings';
import Recommendations from './Recommendations';
import Home from './Home';  // Import the new Home component
import Footer from './Footer';  // Import the footer component
import AboutUs from './AboutUs';      
import TermsAndConditions from './TermsAndConditions'; // Import the TermsAndConditions component
import FAQs from './FAQs'; // Import the FAQs component
import PrivacyPolicy from './PrivacyPolicy';
import logo from './images/SecureWifiLogo.png'; // Adjust the path to where your logo is located

import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <img src={logo} alt="SecureWiFi Logo" className="logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/wifisettings" 
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                How to view WiFi Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/input" 
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                Generate Recommendation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/recommendations" 
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                Saved Recommendations
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* Route for the Home page */}
                    <Route path="/" element={<Home />} />

                    {/* Route for WiFi Setup */}
                    <Route path="/input" element={<WiFiSetup />} />

                    {/* Route for How to view WiFi Settings */}
                    <Route path="/wifisettings" element={<WiFiSettings />} />

                    {/* Route for the Recommendations page */}
                    <Route path="/recommendations" element={<Recommendations />} />
                    
                    {/* Route for About Us page */}
                    <Route path="/about" element={<AboutUs />} />

                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
