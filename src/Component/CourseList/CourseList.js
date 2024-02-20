import React, { useState, useEffect } from "react";
import "./Courselist.css";
import axios from "axios";
import Course_Element from "./Course_Element/Course_Element";
function CourseList() {
  // Fetching Data from the Database about courses for the course list
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  useEffect(() => {
    // Set initial displayed courses
    setDisplayedCourses(courses.slice(0, 4));
  }, [courses]);

  const handleNext = () => {
    if (currentIndex + 4 < courses.length) {
      setCurrentIndex(currentIndex + 4);
      setDisplayedCourses(courses.slice(currentIndex + 4, currentIndex + 8));
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
      setDisplayedCourses(courses.slice(currentIndex - 4, currentIndex));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/course_lists"
        );
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="masterdiv">
      <h1>Course List</h1>
      <div className="course-slider-SH">
        {displayedCourses.map((course) => (
          <div
            key={course._id}
            className="course-card"
          >
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>Number of Videos: {course.videos.length}</p>
            <p>Tags: {course.tags.join(", ")}</p>
          </div>
        ))}
        <button
          disabled={currentIndex === 0}
          onClick={handlePrev}
        >
          &lt; Prev
        </button>
        <button
          disabled={currentIndex + 4 >= courses.length}
          onClick={handleNext}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default CourseList;
