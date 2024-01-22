import React from "react";
import "./Course_Element.css";
import courselogo from "../../../assets/images/Rectangle 19.png";
function Course_Element() {
  return (
    <div className="container">
      <div className="image">
        <img
          src={courselogo}
          alt="Course-pic"
        />
      </div>
      <div className="title-bar">
        <h4>Course Name</h4>
      </div>
    </div>
  );
}

export default Course_Element;
