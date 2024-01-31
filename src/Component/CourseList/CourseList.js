import React, { useState, useEffect } from "react";
import "./Courselist.css";
import axios from "axios";
import Course_Element from "./Course_Element/Course_Element";
function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/course_lists "
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(courses);
  return (
    <div className="masterdiv">
      <div className="heading">
        <h2>Courses Enrolled</h2>
      </div>
      <div className="Element_list">
        {Array(4)
          .fill(true)
          .map((item, index) => (
            <Course_Element
              key={courses._id}
            /> /* Props to be passed here for element details */
          ))}
      </div>
    </div>
  );
}

export default CourseList;
