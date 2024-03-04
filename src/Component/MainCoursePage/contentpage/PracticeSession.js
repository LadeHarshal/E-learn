import React, { useState, useEffect } from 'react';
import './PracticeSessionPage.css';

const PracticeSessionPage = () => {
  // Mock tests and assessments
  const mockTests = [
    {
      title: 'HTML Basics Test',
      description: 'Test your knowledge of HTML fundamentals',
      duration: 1800, // 30 minutes in seconds
      difficulty: 'Easy',
      questions: [
        { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Line'], correctAnswer: 'Hyper Text Markup Language' },
        { question: 'What is the correct HTML element for inserting a line break?', options: ['<br>', '<break>', '<lb>', '<linebreak>'], correctAnswer: '<br>' },
        // Add more HTML questions as needed
      ]
    },
    {
      title: 'CSS Advanced Test',
      description: 'Test your knowledge of advanced CSS concepts',
      duration: 2700, // 45 minutes in seconds
      difficulty: 'Medium',
      questions: [
        { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'], correctAnswer: 'Cascading Style Sheets' },
        { question: 'Which CSS property controls the text size?', options: ['font-size', 'text-size', 'font-style', 'text-style'], correctAnswer: 'font-size' },
        // Add more CSS questions as needed
      ]
    },
    // Add more mock tests and assessments
  ];

  const [currentTestIndex, setCurrentTestIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (currentTestIndex !== null) {
      const testDuration = mockTests[currentTestIndex].duration;
      setTimeLeft(testDuration);
      const interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentTestIndex, mockTests]);

  const startTest = (testIndex) => {
    setCurrentTestIndex(testIndex);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < mockTests[currentTestIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of test
      setCurrentTestIndex(null);
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="practice-session-page">
      <h1 className="practice-session-header">Practice Session</h1>
      <div className="mock-tests">
        {mockTests.map((test, index) => (
          <div key={index} className="mock-test-card">
            <h3>{test.title}</h3>
            <p>{test.description}</p>
            <p>Duration: {Math.floor(test.duration / 60)} minutes</p>
            <p>Difficulty: {test.difficulty}</p>
            <button className="start-test-button" onClick={() => startTest(index)}>Start Test</button>
          </div>
        ))}
      </div>
      {currentTestIndex !== null && (
        <div className="test-container">
          <h2>Test: {mockTests[currentTestIndex].title}</h2>
          <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
          <div className="question-container">
            <h3>Question {currentQuestionIndex + 1}</h3>
            <p>{mockTests[currentTestIndex].questions[currentQuestionIndex].question}</p>
            <div className="options">
              {mockTests[currentTestIndex].questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option"
                  onClick={nextQuestion}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeSessionPage;
