import React from "react";
import "./Course_Element.css";
import courselogo from "../../../assets/images/Rectangle 19.png";
function Course_Element(props) {
  return (
    <div className="container">
      <div className="image">
        <img
          src={courselogo}
          alt="Course-pic"
        />
      </div>
      <div className="title-bar">
        <h4>{props.details.name}</h4>
        {/* <h4>{props.details.description}</h4> */}
      </div>
    </div>
  );
}

export default Course_Element;
