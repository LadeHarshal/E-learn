import React from 'react';
import './PurchaseGuidePage.css'; // Import CSS file for styling

const PurchaseGuidePage = () => {
  return (
    <div className="purchase-guide-page">
      <h1>How to Purchase a Course</h1>
      <div className="steps">
        <h2>Step 1: Explore Available Courses</h2>
        <p>
          Browse through our extensive collection of courses. You can filter courses by category, difficulty level,
          instructor, or search for specific topics.
        </p>

        <h2>Step 2: Choose a Course</h2>
        <p>
          Once you've found a course you're interested in, click on it to view more details.
        </p>

        <h2>Step 3: Checkout</h2>
        <p>
          Proceed to the checkout page to complete your purchase. You'll need to provide your payment information and
          billing details.
        </p>

        <h2>Step 4: Access Your Course</h2>
        <p>
          Once your purchase is complete, you'll gain access to the course materials immediately. Start learning at your own pace and unlock your full potential!
        </p>
      </div>
      <div className="contact">
        <h2>Need Help?</h2>
        <p>If you have any questions or encounter any issues during the purchasing process, feel free to contact us at support@example.com.</p>
      </div>
      
    </div>
  );
};

export default PurchaseGuidePage;
