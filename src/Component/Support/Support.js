import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="support-heading">Support Information</h2>
            <div className="support-details">
              <div className="info-section">
                <h3>Support Hours</h3>
                <ul>
                  <li>Monday - Friday: 9:00 AM - 6:00 PM (GMT+5:30)</li>
                  <li>Saturday: 9:00 AM - 1:00 PM (GMT+5:30)</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>Support Channels</h3>
                <ul>
                  <li>Email: support@example.com</li>
                  <li>Phone: +91-1234567890</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>Additional Information</h3>
                <p>For technical support:</p>
                <ul>
                  <li>Please provide detailed information about the problem you are experiencing.</li>
                  <li>Include screenshots or error messages, if applicable.</li>
                </ul>
                <p>For billing inquiries:</p>
                <ul>
                  <li>Include your account information and transaction details.</li>
                  <li>Provide the invoice number, if available.</li>
                </ul>
                <p>For course-related questions:</p>
                <ul>
                  <li>Mention the course name and any relevant details.</li>
                  <li>Specify the issue or question you have about the course.</li>
                </ul>
              </div>
              <div className="note-section">
                <p><strong>Note:</strong> If you have specific questions about a course or need assistance with your account, please visit our <a href="/contactus">Contact Us</a> section and provide the necessary details in your message.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;
