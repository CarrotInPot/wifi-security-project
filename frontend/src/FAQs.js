// FAQs.js
import React, { useState } from 'react';
import './FAQs.css'; // Import the CSS file for styling

const FAQs = () => {
    // Define the FAQs as an array of objects
    const faqs = [
        {
            question: 'What is SecureWi-Fi?',
            answer: 'SecureWi-Fi is a platform that provides best practice recommendations for setting up secure wireless networks for home, public, retail, and business use.'
        },
        {
            question: 'How do I check my Wi-Fi security settings?',
            answer: 'You can check your Wi-Fi security settings by following our step-by-step guides for Windows and MacOS under the "How to View Wi-Fi Settings" section.'
        },
        {
            question: 'How does SecureWi-Fi generate recommendations?',
            answer: 'Our platform generates recommendations based on the information you provide, such as authentication methods, cipher types, and usage scenarios.'
        },
        {
            question: 'Can I save my recommendations?',
            answer: 'Yes, you can save your recommendations. These are stored automatically and locally in your browser and can be viewed under the "Saved Recommendations" section.'
        },
        {
            question: 'How can I contact support?',
            answer: 'You can contact support by emailing us at: swh3413@autuni.ac.nz '
        }
    ];

    // State to track which FAQ is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Toggle the FAQ item
    const toggleFAQ = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="faqs-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faqs-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="toggle-icon">
                                {expandedIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
