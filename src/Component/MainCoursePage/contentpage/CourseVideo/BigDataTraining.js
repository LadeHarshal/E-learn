import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './BigDataTraining.css';

const BigDataCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title"> Big Data Training </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=KCEPoPJ8sWw" controls={true}></ReactPlayer>
    </div>
  );
};

export default BigDataCourse;
