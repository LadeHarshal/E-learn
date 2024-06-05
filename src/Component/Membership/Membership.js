import React, { useState } from 'react';

const Membership = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [membershipType, setMembershipType] = useState('free');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMembershipTypeChange = (e) => {
    setMembershipType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted with:', { email, password, membershipType });
  };

  return (
    <div>
      <h2>Membership</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Membership Type:</label>
          <select value={membershipType} onChange={handleMembershipTypeChange}>
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Membership;
