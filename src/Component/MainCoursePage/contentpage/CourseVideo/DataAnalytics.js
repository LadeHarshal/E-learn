import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './DataAnalytics.css';

const DataAnalyticsCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title"> Data Analytics course </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=zwasdVPPFFw&list=PLEiEAq2VkUUKgEFXH1tBbHwq38oWYDScU" controls={true}></ReactPlayer>
    </div>
  );
};

export default DataAnalyticsCourse;
