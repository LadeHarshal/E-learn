// StudentHome.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PdfViewer from "../PDFViewer/PdfViewer";
import "./StudentHome.css";
import Book from "../../assets/images/Book2.png";
import Teaching from "../../assets/images/Teaching.png";
import illustration1 from "../../assets/images/Illustration.png";
import search_btn from "../../assets/images/Search.png";
// import profile_img from "../../assets/images/Group 4.png";
// import logo from "../../assets/images/Logo_DiamondBkg.png";
import Home_logo from "../../assets/images/Home (1).png";
import MYCourses_logo from "../../assets/images/Laptop.png";
import BrowseCourses_logo from "../../assets/images/Book.png";
import EditProfile_logo from "../../assets/images/ProfileEdit.png";
import profile_img from "../../assets/images/Group 4.png";

function StudentHome() {
  const navItems = [
    { path: "/StudentHome", label: "Home", icon: Home_logo },
    { path: "/StudentDashboard", label: "Dashboard", icon: MYCourses_logo },
    { path: "/contactus", label: "Help Me", icon: BrowseCourses_logo },
    { path: "/home", label: "Home", icon: EditProfile_logo },
  ];
  return (
    <div className="Student-home">
      <Navbar
        navItems={navItems}
        role={"Student"}
      />
      <div className="notnav">
        {/* Top Bar */}
        <div className="top">
          <h4>HOME</h4>
          {/* Top bar content */}
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
        {/* Middle Bar */}
        <div className="mid">
          <div className="selection">
            <Link to="/courses">
              <img
                src={Book}
                alt="courses"
              />
              <h5>View Courses</h5>
            </Link>
          </div>

          <div className="mid-center">
            {/* Middle bar content EyeCatcher*/}
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
            <Link to="/tutorials">
              <img
                src={Teaching}
                alt="tutorials"
              />
              <h5>View Tutorials</h5>
            </Link>
          </div>
        </div>
        {/* Course List and Tutorials */}
        <div className="content">
          {/* Your existing course list and tutorials content */}
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
