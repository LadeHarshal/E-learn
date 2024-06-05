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
import Button from "@mui/joy/Button";
import { motion } from "framer-motion";

// import Logout from "@mui/icons-material/Logout";

import { useLocation } from "react-router-dom";

// For signout
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Logout } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
function StudentHome(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const LoginData = location.state;
  // console.log("here is the location prop", LoginData);
  // console.log("here is the parameter prop", props);
  // Signout Handler
  const handleSignOut = () => {
    // Sign out the user
    signOut(props.auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
    // Redirect to SignUp page
    navigate("/register", {});
  };
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
  const [startIndexPdf, setStartIndexPdf] = useState(0);
  const coursesPerPage = 3;

  const handlePrevious = () => {
    const newIndex = Math.max(startIndex - coursesPerPage, 0);
    setStartIndex(newIndex);
  };

  const handleNext = () => {
    const lastIndex = courses.length - 1;
    let newIndex = startIndex + coursesPerPage;
    if (newIndex >= lastIndex) {
      // If newIndex exceeds the last index, loop back to the beginning
      newIndex = 0;
    }
    setStartIndex(newIndex);
  };

  const handlePreviousPdf = () => {
    const newIndexPdf = Math.max(startIndexPdf - coursesPerPage, 0);
    setStartIndex(newIndexPdf);
  };

  const handleNextPdf = () => {
    const lastIndexPdf = Pdfs.length - 1;
    let newIndexPdf = startIndexPdf + coursesPerPage;
    if (newIndexPdf >= lastIndexPdf) {
      // If newIndex exceeds the last index, loop back to the beginning
      newIndexPdf = 0;
    }
    setStartIndex(newIndexPdf);
  };
  const displayedCourses = courses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const displayedPdfs = Pdfs.slice(
    startIndexPdf,
    startIndexPdf + coursesPerPage
  );
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
  // Framer motion
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="notnav">
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
              <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className="parent"
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* <motion.div
                  layout
                  className="child"
                /> */}
                <img
                  src={illustration1}
                  alt="Study1"
                />
              </motion.div>
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
              <button
                onClick={handlePreviousPdf}
                disabled={startIndexPdf === 0}
              >
                Previous
              </button>
              {displayedPdfs.map((item, index) => (
                <Course_Element
                  key={index}
                  course={item}
                  ActionText="View Tutorial"
                />
              ))}
              <button
                onClick={handleNextPdf}
                disabled={startIndexPdf + coursesPerPage >= Pdfs.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
