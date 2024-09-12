import React from 'react';
import './WiFiSettings.css';
import step1 from './images/windows/windows-step1.png';
import step2 from './images/windows/windows-step2.png';
import step2_1 from './images/windows/windows-step2_1.png';
import step3 from './images/windows/windows-step3.png';
import step3_1 from './images/windows/windows-step3_1.png';
import step3_2 from './images/windows/windows-step3_2.png';

import step1mac from './images/mac/mac-step1.png';
import step2mac from './images/mac/mac-step2.png';

const WiFiSettings = () => {
    return (
        <div className="wifi-settings-container">
            <div className="section">
                <h2>For Windows 7 and newer</h2>
                <div className="step">
                    <img src={step1} alt="Step 1"/>
                    <p><strong>Step 1:</strong> Open the Control Panel from the Start menu.</p>
                </div>
                <div className="step">
                    <img src={step2} alt="Step 2"/>
                    <img src={step2_1} alt="Step 2.1"/>
                    <p><strong>Step 2:</strong> Go to Network and Internet, then Network and Sharing Center.</p>
                </div>
                <div className="step">
                    <img src={step3} alt="Step 3"/>
                    <img src={step3_1} alt="Step 3.1"/>
                    <img src={step3_2} alt="Step 3.2"/>
                    <p><strong>Step 3:</strong> Click on your WiFi network name to view the status window. Click on Wireless Properties, then the Security tab to view security type.</p>
                </div>
            </div>
            <div className="section">
                <h2>For MacOS Ventura 13 and newer</h2>
                <div className="step">
                    <img src={step1mac} alt="Step 1"/>
                    <p><strong>Step 1:</strong> While holding down the option key, click on the Wi-Fi icon in the toolbar on the top right.</p>
                </div>
                <div className="step">
                    <img src={step2mac} alt="Step 2"/>
                    <p><strong>Step 2:</strong> Under your connected network, view the security type.</p>
                </div>
            </div>
        </div>
    );
};

export default WiFiSettings;