// TermsAndConditions.js
import React from 'react';
import './TermsAndConditions.css'; // Import the CSS file for styling

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <p>
                These terms and conditions outline the rules and regulations for the use of
                SecureWiFi's Website.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use
                SecureWiFi if you do not agree to all of the terms and conditions stated on this page.
            </p>
            
            <h2>2. Changes to Terms</h2>
            <p>
                We reserve the right to modify or replace these Terms at any time. Your continued use of the Service after any
                such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2>3. Use of the Website</h2>
            <p>
                You may not use this website in a way that is unlawful or harmful to SecureWiFi. Prohibited activities include,
                but are not limited to, spreading malware, hacking, or attempting to gain unauthorized access to our systems.
            </p>
            
            <h2>4.Limitation of Liability</h2>
            <p>
                SecureWiFi will not be liable for any damages arising out of or in connection with your use of the website,
                including, but not limited to, direct, indirect, incidental, and consequential damages.
            </p>
            
            <h2>5. Privacy Policy</h2>
            <p>
                Your privacy is important to us. Please review our <a href="/wifi-security-project/privacy-policy">Privacy Policy</a> for details on how we
                collect, use, and protect your information.
            </p>
            
            <h2>6. Intellectual Property</h2>
            <p>
                The content, images, logos, and other materials on this website are the property of SecureWiFi or its licensors.
                You may not use, copy, or distribute any materials without prior written consent from us.
            </p>
            
            <h2>7. Disclaimer</h2>
            <p>
                The information provided on this website is for general informational purposes only. We do not guarantee the
                accuracy, completeness, or usefulness of any information on the website.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:swh3413@autuni.ac.nz">swh3413@autuni.ac.nz</a>.
            </p>
        </div>
    );
};

export default TermsAndConditions;
