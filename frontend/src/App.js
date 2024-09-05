import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WiFiSetup from './WiFiSetup';
import WiFiSettings from './WiFiSettings';
import Recommendations from './Recommendations';
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
                            <Link to="/recommendations">Recommendations</Link>
                        </li>
                        <li>
                            <Link to="/input">Input Information</Link>
                        </li>
                    </ul>
                </nav>

                {/* Replace Switch with Routes */}
                <Routes>
                    {/* React Router v6 now uses "element" to render components */}
                    <Route path="/home" element={<WiFiSetup />} />
                    <Route path="/wifisettings" element={<WiFiSettings />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/input" element={<h2>Input Information Page</h2>} />
                    <Route path="/" element={<WiFiSetup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
