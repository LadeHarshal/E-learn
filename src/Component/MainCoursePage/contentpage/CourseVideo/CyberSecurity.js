import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './CyberSecurity.css';

const CyberSecurityCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Cyber Security Course </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" controls={true}></ReactPlayer>
    </div>
  );
};

export default CyberSecurityCourse;