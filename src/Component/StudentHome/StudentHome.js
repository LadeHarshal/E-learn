// StudentHome.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./StudentHome.css";
import "../Courses-section/courses.css";
import Book from "../../assets/images/Book2.png";
import Teaching from "../../assets/images/Teaching.png";
import illustration1 from "../../assets/images/Illustration.png";
import search_btn from "../../assets/images/Search.png";
import Home_logo from "../../assets/images/Home (1).png";
import MYCourses_logo from "../../assets/images/Laptop.png";
import BrowseCourses_logo from "../../assets/images/Book.png";
import EditProfile_logo from "../../assets/images/ProfileEdit.png";
import profile_img from "../../assets/images/Group 4.png";
import CourseList from "../CourseList/CourseList";
import CourseCard from "../Courses-section/CourseCard";
import Tutorial from "../Navbar/Tutorials/Tutorial";

function StudentHome() {
  const navItems = [
    { path: "/StudentHome", label: "Home", icon: Home_logo },
    { path: "/StudentDashboard", label: "Dashboard", icon: EditProfile_logo },
    { path: "/contactus", label: "Help Me", icon: BrowseCourses_logo },
    { path: "/tutorials", label: "Tutorials", icon: MYCourses_logo },
  ];

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
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetching Data about the student from the student dataabse

  const [student, setStudent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/Student_data"
        );
        setStudent(response.data);
        // console.log(student);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {/* Your existing course list and tutorials content */}
        <div className="material">
          {/* Courses */}

          {/* <div className="course-list">
            <h3>Courses Enrolled</h3>
            <div className="courses">
              {courses.map((item) => (
                <CourseCard
                  className="card"
                  key={item._id}
                  item={item}
                />
              ))}
            </div>
          </div> */}

          {/* Tutorials  */}
          <div className="tutorial-pane">
            <div className="tutorials-list">
              <Tutorial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
