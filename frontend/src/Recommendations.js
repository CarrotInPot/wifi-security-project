import React, { useEffect, useState } from 'react';
import './Recommendation.css'; // Import the CSS file for styling

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    // Fetch recommendations from localStorage on component mount
    useEffect(() => {
        const storedRecommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
        setRecommendations(storedRecommendations);
    }, []);

    // Function to remove a recommendation by index
    const removeRecommendation = (indexToRemove) => {
        const updatedRecommendations = recommendations.filter((_, index) => index !== indexToRemove);
        setRecommendations(updatedRecommendations);
        localStorage.setItem('recommendations', JSON.stringify(updatedRecommendations));
    };

    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="recommendations-container">
            <h2>Previous Recommendations</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet.</p>
            ) : (
                <ul>
                    {recommendations
                        .slice() // Create a copy of the array
                        .reverse() // Reverse the array to show latest first
                        .map((rec, index) => (
                            <li key={index} className="recommendation-item">
                                <div className="recommendation-details">
                                    <strong>Timestamp:</strong> {rec.timestamp} <br/>
                                    <strong>Security Type:</strong> {rec.securityType.toUpperCase()} <br/>
                                    <strong>Encryption Type:</strong> {rec.encryptionType} <br/>
                                    <strong>Usage Type:</strong> {capitalizeFirstLetter(rec.usageType)} <br/>
                                    <strong>Recommendation:</strong> {rec.recommendation} <br/>
                                </div>
                                <button onClick={() => removeRecommendation(index)} className="remove-button">
                                    Remove
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};

export default Recommendations;
