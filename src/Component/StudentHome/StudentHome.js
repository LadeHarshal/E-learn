// StudentHome.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./StudentHome.css";
import "../Our_popular_courses/courses.css";
import Book from "../../assets/images/Book2.png";
import Teaching from "../../assets/images/Teaching.png";
import illustration1 from "../../assets/images/Illustration.png";
import search_btn from "../../assets/images/Search.png";
import profile_img from "../../assets/images/Group 4.png";
import CourseList from "../CourseList/CourseList";
import CourseCard from "../Our_popular_courses/CourseCard";
import Course_Element from "../CourseList/Course_Element/Course_Element";
import Tutorial from "../Navbar/Tutorials/Tutorial";
import VillaRoundedIcon from "@mui/icons-material/VillaRounded";

function StudentHome() {
  /// Fetching Data about pdfs (Tutorial lists , link and image to display)
  const [Pdfs, setPdfs] = useState([]); //Created state for loading tutorials
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/trial");
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Fetching Data from the Database about courses for the course list
  const [courses, setCourses] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const coursesPerPage = 3;

  const handleNext = () => {
    const newIndex = Math.min(startIndex + coursesPerPage, courses.length - 1);
    setStartIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(startIndex - coursesPerPage, 0);
    setStartIndex(newIndex);
  };

  const displayedCourses = courses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const displayedPdfs = Pdfs.slice(startIndex, startIndex + coursesPerPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/courses");
        setCourses(response.data[0].courses);
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
      <div className="Nav-container">
        <Navbar role={"Student"} />
      </div>

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

          <div className="course-list">
            <h3>Courses Enrolled</h3>
            <div className="courses">
              <button
                onClick={handlePrevious}
                disabled={startIndex === 0}
              >
                Previous
              </button>
              {displayedCourses.map((item, index) => (
                <Course_Element
                  key={index}
                  course={item}
                  ActionText="View Video"
                />
              ))}
              <button
                onClick={handleNext}
                disabled={startIndex + coursesPerPage >= courses.length}
              >
                Next
              </button>
            </div>
            {/*  */}
            {/* <div className="navigation-buttons">
              <button
                onClick={handlePrevious}
                disabled={startIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + coursesPerPage >= courses.length}
              >
                Next
              </button>
            </div> */}
            {/*  */}
          </div>

          {/* Tutorials  */}
          <div className="tutorial-pane">
            <h3>Tutorials</h3>
            <div className="tutorials-list courses">
              {displayedPdfs.map((item, index) => (
                <Course_Element
                  key={index}
                  course={item}
                  ActionText="View Tutorial"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
