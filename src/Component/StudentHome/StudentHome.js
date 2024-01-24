import React from "react";
import "./StudentHome.css";
import search_btn from "../../assets/images/Search.png";
import profile_img from "../../assets/images/Group 4.png";
import Book from "../../assets/images/Book2.png";
import Teaching from "../../assets/images/Teaching.png";
import illustration1 from "../../assets/images/Illustration.png";
import Course_Element from "../CourseList/Course_Element/Course_Element";
import Navbar from "../Navbar/Navbar";

function StudentHome() {
  return (
    <div className="Student-home">
      <Navbar />

      <div className="notnav">
        {/* Top Bar */}
        <div className="top">
          <h4>HOME</h4>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Courses and tutorials"
            />
            <button>
              <img
                src={search_btn}
                alt="search"
              />
            </button>
          </div>
          <div className="logout_option">
            <p>LOGOUT</p>
            <img
              src={profile_img}
              alt="profile"
            />
          </div>
        </div>

        {/* Middle Bar For show and eye-catching */}
        <div className="mid">
          <div className="selection">
            <img
              src={Book}
              alt="courses"
            />
            <h5>View Courses</h5>
          </div>
          <div className="mid-center">
            <div className="illustration">
              <img
                src={illustration1}
                alt="Study1"
              />
            </div>
            <div className="text">
              <h5>Choose Your Learning Method</h5>
            </div>
          </div>
          <div className="selection">
            <img
              src={Teaching}
              alt="courses"
            />
            <h5>View Tutorials</h5>
          </div>
        </div>

        {/* Course List */}
        <div className="course-list">
          <h4 className="title">New Courses</h4>
          <div className="list">
            {Array(4)
              .fill(true)
              .map((item, index) => (
                <Course_Element
                  key={index}
                /> /* Props to be passed here for element details */
              ))}
          </div>
        </div>

        {/* Viewed Tutorials */}
        <div className="tutorials"></div>
      </div>
    </div>
  );
}

export default StudentHome;
