// PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file for styling

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your
                personal information when you use our website and services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We may collect personal information such as your name, email address, and other details when you use
                our website, create an account, or contact us. We may also collect non-personal information such as
                your IP address, browser type, and usage data to improve our services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the information we collect to provide and improve our services, communicate with you, and
                personalize your experience. We may also use your information to send you promotional materials, if you
                have opted in to receive them.
            </p>

            <h2>3. Sharing Your Information</h2>
            <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information with trusted third-party service providers who assist us in operating our website and
                conducting our business, as long as they agree to keep your information confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
                We take appropriate security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
                Our website may use cookies and similar tracking technologies to enhance your experience and analyze
                usage patterns. You can choose to disable cookies through your browser settings, but this may affect
                your ability to use certain features of our website.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
                We may update this privacy policy from time to time. When we do, we will post the updated policy on this
                page and update the "Last Updated" date below. We encourage you to review this policy periodically to
                stay informed about how we protect your information.
            </p>

            <p className="last-updated">
                <em>Last Updated: September 26, 2024</em>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
