import React, { useEffect, useState } from 'react';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    // Fetch recommendations from localStorage on component mount
    useEffect(() => {
        const storedRecommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
        setRecommendations(storedRecommendations);
    }, []);

    return (
        <div className="recommendations-container">
            <h2>Previous Recommendations</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet.</p>
            ) : (
                <ul>
                    {recommendations.map((rec, index) => (
                        <li key={index}>
                            <strong>Timestamp:</strong> {rec.timestamp} <br/>
                            <strong>Authentication Method:</strong> {rec.authMethod} <br/>
                            <strong>Cipher:</strong> {rec.cipher} <br/>
                            <strong>Usage Type:</strong> {rec.usageType} <br/>
                            <strong>Recommendation:</strong> {rec.recommendation} <br/><br/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Recommendations;
