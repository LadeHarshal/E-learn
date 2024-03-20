import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Python.css';

const PythonCourse = () => {
  return (
    <div>
      <h2>Python Programming </h2>
      <ReactPlayer url="https://www.youtube.com/watch?v=vLqTf2b6GZw" controls={true}></ReactPlayer>
    </div>
  );
};

export default PythonCourse;
