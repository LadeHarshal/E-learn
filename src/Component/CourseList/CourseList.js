import React from "react";
import "./Courselist.css";
import Course_Element from "./Course_Element/Course_Element";
function CourseList() {
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
              key={index}
            /> /* Props to be passed here for element details */
          ))}
      </div>
    </div>
  );
}

export default CourseList;
