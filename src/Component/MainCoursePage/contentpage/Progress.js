// ProgressTrackingPage.js
import React, { useEffect, useState } from 'react';
import './ProgressTrackingPage.css'; // Import CSS for styling

const ProgressTrackingPage = () => {
  const [userProgress, setUserProgress] = useState(null);

  useEffect(() => {
    // Dummy data for demonstration purposes
    const dummyProgressData = {
      course1: {
        title: 'Course 1',
        progress: 75,
        lessonsCompleted: 7,
        totalLessons: 10,
      },
      course2: {
        title: 'Course 2',
        progress: 50,
        lessonsCompleted: 5,
        totalLessons: 8,
      },
      // Add more courses if needed
    };
    setUserProgress(dummyProgressData);
  }, []);

  return (
    <div className="progress-tracking-page">
      <h1>Progress Tracking</h1>
      {userProgress ? (
        <div className="progress-details">
          {Object.values(userProgress).map(course => (
            <div key={course.title} className="course-progress">
              <h2>{course.title}</h2>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${course.progress}%` }}></div>
              </div>
              <p>Progress: {course.progress}%</p>
              <p>{course.lessonsCompleted}/{course.totalLessons} Lessons Completed</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading progress...</p>
      )}
    </div>
  );
};

export default ProgressTrackingPage;
