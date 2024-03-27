import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './DigitalMarketing.css';

const DigitalMarketingCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Digital Marketing Course </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=nkNHn0VqVBA&list=PL9ooVrP1hQOH-nMMFeSG-DFwyATtUg4YA" controls={true}></ReactPlayer>
    </div>
  );
};

export default DigitalMarketingCourse;
