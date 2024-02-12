import React from 'react';
import './termsofservice.css'; // Import your CSS file

function TermsOfService() {
    return (
        <div className="terms-container">
            <h1 className="title">Terms of Service</h1>
            <p>Welcome to our e-learning platform. By accessing or using our platform, you agree to be bound by the following terms and conditions:</p>
            <h2 className="section-title">1. Accounts</h2>
            <p>You must be at least 18 years of age to create an account on our e-learning platform. This is typically due to legal considerations and the need to comply with regulations regarding data privacy and protection, as well as the terms of service of the platform. By setting an age limit, the platform aims to ensure that users have the legal capacity to agree to the platform's terms and conditions.</p>
            <h2 className="section-title">2. Content</h2>
            <p>Our e-learning platform allows you to post, link, store, share, and otherwise make available certain information. You are responsible for the content that you post on the platform, and you agree not to post any content that violates our community guidelines or the rights of others.</p>
            <h2 className="section-title">3. Prohibited Conduct</h2>
            <p>You may not access or use our e-learning platform for any purpose other than that for which we make the platform available. You agree not to engage in any conduct that could damage, disable, or impair the operation of the platform, or interfere with any other party's use of the platform.</p>
            <h2 className="section-title">4. Termination</h2>
            <p>We may terminate or suspend your account and bar access to our e-learning platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. If you wish to terminate your account, you may simply discontinue using the platform.</p>
            <h2 className="section-title">5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of [India]. Any dispute or claim arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in [India].</p>
            <h2 className="section-title">6. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <h2 className="section-title">7. Payment Terms</h2>
            <p>Payments for courses and services offered on our platform are subject to the following terms:</p>
            <ul>
                <li>Payment is due at the time of enrollment or purchase, unless otherwise specified.</li>
                <li>All payments are non-refundable, except as required by law or as otherwise specified in our refund policy.</li>
                <li>We accept payment via credit card, PayPal, and other methods as specified on our platform.</li>
            </ul>
            <h2 className="section-title">8. User Conduct</h2>
            <p>As a user of our platform, you agree to the following conduct:</p>
            <ul>
                <li>Do not engage in any activity that could harm or interfere with the proper functioning of our platform.</li>
                <li>Do not attempt to access or use accounts, data, or resources that you are not authorized to access.</li>
                <li>Do not engage in any form of harassment, bullying, or discrimination against other users.</li>
            </ul>
        </div>
    );
}

export default TermsOfService;
