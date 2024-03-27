import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './CryptographyCourse.css'

const CryptoGraphyCourse = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Python Programming </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=10OFWdbHTGA&list=PLPIwNooIb9viexdR0fCeMwTThgZBx4lBJ" controls={true}></ReactPlayer>
    </div>
  );
};

export default CryptoGraphyCourse;
