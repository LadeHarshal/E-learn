import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './Figma.css'; // Import your CSS file

const FigmaCourseVideo = () => {
  return (
    <div className="video-container">
      <h2 className="video-title">Figma Course Video</h2>
      {/* <video className="video-player" width="640" height="360" controls>
        <source src="/path/to/your/figma-course-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <ReactPlayer url="https://www.youtube.com/watch?v=JNZ0nkC7Unk&list=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl" controls={true}></ReactPlayer>
    </div>
  );
};

export default FigmaCourseVideo;
