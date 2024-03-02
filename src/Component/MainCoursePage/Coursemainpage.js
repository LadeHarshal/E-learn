import React from 'react';
import { Link } from 'react-router-dom';
import './Coursemainpage.css'

const CourseMain = () => {
  return (
    <div className="course-main">
      <h1>Welcome to the Course!</h1>
      <div className="course-options">
        <div className="course-option">
          <h2>Course Videos</h2>
          <Link to="/course/videos" className="course-link">Explore Videos</Link>
        </div>
        <div className="course-option">
          <h2>Progress Tracking</h2>
          <Link to="/course/progress" className="course-link">Track Your Progress</Link>
        </div>
        <div className="course-option">
          <h2>Quizzes</h2>
          <Link to="/course/quizzes" className="course-link">Take Quizzes</Link>
        </div>
        <div className="course-option">
          <h2>Notes</h2>
          <Link to="/course/notes" className="course-link">Access Notes</Link>
        </div>
        <div className="course-option">
          <h2>Practice Sessions</h2>
          <Link to="/course/practice" className="course-link">Join Practice Sessions</Link>
        </div>
        <div className="course-option">
          <h2>Aptitude Papers</h2>
          <Link to="/course/aptitude" className="course-link">Access Aptitude Papers</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseMain;
