import React, { useState } from 'react';
import './ContactUs.css';
import{Button} from 'reactstrap';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, like sending data to a backend server
    // For simplicity, let's just log the form data
    console.log({ name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    // Set submitted to true to show a success message or redirect to a thank you page
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button>Submit</Button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
