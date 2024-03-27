import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './JavaProgramming.css';

const JavaCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Java Programming Video</h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=UmnCZ7-9yDY&t=1450s" controls={true}></ReactPlayer>
    </div>
  );
};

export default JavaCourse;
