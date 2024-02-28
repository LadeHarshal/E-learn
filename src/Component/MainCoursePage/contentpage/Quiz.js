// QuizPage.js
import React, { useState } from 'react';
import './QuizPage.css'; // Import CSS for styling

const QuizPage = () => {
  // Dummy quiz data (replace with real quiz data)
  const quizData = [
    {
      question: 'What is the main purpose of HTML?',
      options: ['To structure web content', 'To style web content', 'To add interactivity to web content', 'To define web content layout'],
      correctAnswer: 'To structure web content'
    },
    {
      question: 'What does CSS stand for?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
      correctAnswer: 'Cascading Style Sheets'
    },
    {
      question: 'What does DOM stand for?',
      options: ['Document Object Model', 'Data Object Model', 'Digital Object Model', 'Document Oriented Model'],
      correctAnswer: 'Document Object Model'
    },
    // Add more technical questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if selected option is correct
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      // Quiz completed
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-page">
      <h1>Technical Quiz</h1>
      {showScore ? (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p className="score">Your Score: {score} out of {quizData.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p className="question">{quizData[currentQuestionIndex].question}</p>
          <div className="options">
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button className="next-button" onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
