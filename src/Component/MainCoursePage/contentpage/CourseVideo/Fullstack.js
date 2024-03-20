
import React from 'react';
import ReactPlayer from 'react-player/youtube'

 import './FullStack.css'; // Import your CSS file

const FullStackCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Full Stack Web Development Course Video</h2>
      {/* <video className="video-player" width="600" height="360" controls> */}
        <ReactPlayer url="https://www.youtube.com/watch?v=HcOc7P5BMi4&t=2074s" controls={true}></ReactPlayer>
        {/* <source src="/path/to/your/video.mp4" type="video/mp4" /> */}
        
      {/* </video> */}
    </div>
  );
};

export default FullStackCourse;