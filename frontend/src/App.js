import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WiFiSetup from './WiFiSetup';
import WiFiSettings from './WiFiSettings';
import Recommendations from './Recommendations';
import Home from './Home';  // Import the new Home component
import Footer from './Footer';  // Import the footer component
import GeneralRecommendations from './GeneralRecommendations'; // Import the new GeneralRecommendations component
import AboutUs from './AboutUs'; // Import AboutUs component
import TermsAndConditions from './TermsAndConditions'; // Import Terms and Conditions component
import FAQs from './FAQs'; // Import FAQs component
import PrivacyPolicy from './PrivacyPolicy'; // Import Privacy Policy component
import logo from './images/SecureWifiLogo.png'; // Adjust the path to where your logo is located

import './App.css';

function App() {
    return (
        <Router basename="/wifi-security-project"> {/* Added basename for GitHub Pages */}
            <div className="app">
                <nav>
                    <img src={logo} alt="SecureWiFi Logo" className="logo" />
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/wifisettings">How to view WiFi Settings</Link>
                        </li>
                        <li>
                            <Link to="/input">WiFi Security Setup</Link>
                        </li>
                        <li>
                            <Link to="/recommendations">Saved Recommendations</Link>
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

                    {/* Route for General Recommendations */}
                    <Route path="/general-recommendations" element={<GeneralRecommendations />} />

                    {/* Route for About Us page */}
                    <Route path="/about" element={<AboutUs />} />

                    {/* Route for Terms and Conditions page */}
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

                    {/* Route for FAQs page */}
                    <Route path="/faqs" element={<FAQs />} />

                    {/* Route for Privacy Policy page */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
