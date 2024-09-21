import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                Welcome to our WiFi Security Project! The goal of this project is to help users understand 
                and improve their WiFi security by offering recommendations based on the current WiFi settings. 
                And also researches and analysis conducted through the year.
            </p>
            <p>
                Our system allows you to input information about your WiFi configuration, such as authentication 
                methods, cipher types, and usage scenarios (home, business, public, etc.). Based on this information, 
                we provide security recommendations to ensure that your network is as secure as possible.
            </p>
            <p>
                Additionally, you can view previously generated recommendations and also learn more about how to 
                view your WiFi settings.
            </p>
            <p>
                Our mission is to empower users with knowledge about their WiFi network and provide actionable 
                steps to establishing strong wifi security protocols.
            </p>
        </div>
    );
};

export default AboutUs;
