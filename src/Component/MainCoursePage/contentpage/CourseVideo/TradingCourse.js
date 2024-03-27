import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './TradingCourse.css';

const TradingCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Trading Course </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=nP9IMTKIl2w" controls={true}></ReactPlayer>
    </div>
  );
};

export default TradingCourse;