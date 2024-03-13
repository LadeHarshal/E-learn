import React from "react";
import search_btn from "../../assets/images/Search.png";
import profile_img from "../../assets/images/Group 4.png";
import Book from "../../assets/images/Book2.png";
import Teaching from "../../assets/images/Teaching.png";
import illustration1 from "../../assets/images/Illustration.png";
import Course_Element from "../CourseList/Course_Element/Course_Element";
import Navbar from "../Navbar/Navbar";
import details from "../../assets/images/python.jpg";
import "./Course_Details.css";
import btn from "../../assets/images/button.png";

function CourseDetails() {
  return (
    <div className="Course-Details">
      <Navbar />
      <div className="notnav">
        <div className="selection">
          <img
            src={details}
            alt="courses"
          />
        </div>
        <div className="demo">
          <img
            src={btn}
            alt="courses"
          />
        </div>
        {/* Top Bar */}
      </div>
      {/* Middle Bar For show and eye-catching */}
    </div>
  );
}

export default CourseDetails;
