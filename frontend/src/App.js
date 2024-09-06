import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WiFiSetup from './WiFiSetup';
import WiFiSettings from './WiFiSettings';
import Recommendations from './Recommendations';
import Home from './Home';  // Import the new Home component
import Footer from './Footer';  // Import the footer component
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/wifisettings">How to view WiFi Settings</Link>
                        </li>
                        <li>
                            <Link to="/input">Input Information</Link>
                        </li>
                        <li>
                            <Link to="/recommendations">Saved Recommendations</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* Route for the Home page */}
                    <Route path="/home" element={<Home />} />

                    {/* Route for WiFi Setup */}
                    <Route path="/input" element={<WiFiSetup />} />

                    {/* Route for How to view WiFi Settings */}
                    <Route path="/wifisettings" element={<WiFiSettings />} />

                    {/* Route for the Recommendations page */}
                    <Route path="/recommendations" element={<Recommendations />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
