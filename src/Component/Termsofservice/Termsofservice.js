import React from 'react';

function TermsOfService() {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Terms of Service</h1>
            <p style={paragraphStyle}>Welcome to our e-learning platform. By accessing or using our platform, you agree to be bound by the following terms and conditions:</p>
            <h2 style={sectionTitleStyle}>1. Accounts</h2>
            <p style={paragraphStyle}>You must be at least 18 years of age to create an account on our e-learning platform.This is typically due to legal considerations and the need to comply with regulations regarding data privacy and protection, as well as the terms of service of the platform. By setting an age limit, the platform aims to ensure that users have the legal capacity to agree to the platform's terms and conditions.</p>
            <h2 style={sectionTitleStyle}>2. Content</h2>
            <p style={paragraphStyle}>Our e-learning platform allows you to post, link, store, share, and otherwise make available certain information...</p>
            <h2 style={sectionTitleStyle}>3. Prohibited Conduct</h2>
            <p style={paragraphStyle}>You may not access or use our e-learning platform for any purpose other than that for which we make the platform available...</p>
            <h2 style={sectionTitleStyle}>4. Termination</h2>
            <p style={paragraphStyle}>We may terminate or suspend your account and bar access to our e-learning platform immediately, without prior notice or liability...</p>
            <h2 style={sectionTitleStyle}>5. Governing Law</h2>
            <p style={paragraphStyle}>These Terms shall be governed and construed in accordance with the laws of [India]...</p>
            <h2 style={sectionTitleStyle}>6. Changes</h2>
            <p style={paragraphStyle}>We reserve the right, at our sole discretion, to modify or replace these Terms at any time...</p>
            
        </div>
    );
}

// Define inline styles
const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
};

const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
};

const sectionTitleStyle = {
    marginTop: '30px',
    color: '#333', // Change color as needed
};

const paragraphStyle = {
    lineHeight: '1.6',
};

export default TermsOfService;
