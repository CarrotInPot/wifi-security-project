import React from 'react';
import WiFiSetup from './WiFiSetup';

function App() {
    return (
        <div>
            <header className="header">SecureWiFi</header>
            <nav className="navbar">
            <a href="/home">Home</a>
            <a href="/input-information">Input Information</a>
            <a href="/recommendation">Recommendation</a>
            </nav>
            <WiFiSetup />
        </div>
    );
}

export default App;
