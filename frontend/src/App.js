import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WiFiSetup from './WiFiSetup';      // Import the WiFiSetup component
import WiFiSettings from './WiFiSettings'; // Import the WiFiSettings component
import Recommendations from './Recommendations'; // Import the Recommendations component
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/wifisettings">How to view WiFi Settings</Link>
                        </li>
                        <li>
                            <Link to="/recommendations">Recommendations</Link>
                        </li>
                        <li>
                            <Link to="/input">Input Information</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* Route for the Home page */}
                    <Route path="/" element={<h2>Welcome to the Home Page</h2>} />

                    {/* Route for WiFi Setup, previously at /home */}
                    <Route path="/input" element={<WiFiSetup />} />

                    {/* Route for How to view WiFi Settings */}
                    <Route path="/wifisettings" element={<WiFiSettings />} />

                    {/* Route for the Recommendations page */}
                    <Route path="/recommendations" element={<Recommendations />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
