import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './DevopsProject.css';

const DevopsCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title"> Devops Beginners to Advanced Project </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=7Imi2mVkpAg&list=PLQbQOmlGYH3sxlq9ugoq1ipNFP7tus5Gd" controls={true}></ReactPlayer>
    </div>
  );
};

export default DevopsCourse;
