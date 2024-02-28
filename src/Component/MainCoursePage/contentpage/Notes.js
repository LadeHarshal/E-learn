// NotePage.js
import React, { useState, useEffect } from 'react';
import './NotePage.css'; // Import CSS for styling
import { Button } from 'reactstrap'; // Import Button component from Reactstrap for styling

const NotePage = ({ courseId }) => {
  // Dummy syllabus data with PDF links (replace with backend code)
  const dummySyllabus = [
    { note: 'Introduction to the Course', pdfLink: '/pdfs/introduction.pdf' },
    { note: 'Chapter 1: Basics of React', pdfLink: '/pdfs/react_basics.pdf' },
    { note: 'Chapter 2: Advanced React Concepts', pdfLink: '/pdfs/advanced_react.pdf' },
    { note: 'Chapter 3: State Management with Redux', pdfLink: '/pdfs/redux_state_management.pdf' },
    { note: 'Chapter 4: Building a Full-Stack Application', pdfLink: '/pdfs/full_stack_app.pdf' }
  ];

  const [syllabus, setSyllabus] = useState([]);

  useEffect(() => {
    // Set the dummy syllabus data when the component mounts
    setSyllabus(dummySyllabus); // Dummy data for demonstration
  }, []);

  return (
    <div className="note-page">
      <h1 className="note-page-header">Syllabus Notes for Course {courseId}</h1>
      <ul className="syllabus-list">
        {syllabus.map((item, index) => (
          <li key={index} className="syllabus-item">
            <div className="syllabus-info">
              <span className="syllabus-note">{item.note}</span>
              <Button className="view-pdf-button" href={item.pdfLink} target="_blank" rel="noopener noreferrer">
                View PDF
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotePage;
