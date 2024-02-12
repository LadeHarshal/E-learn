import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentDashboard.css";
import stud1 from "../../assets/images/Student1.png";
import profile_img from "../../assets/images/Group 4.png";
import bell from "../../assets/images/image 25.png";
import Navbar from "../Navbar/Navbar";
import CourseList from "../CourseList/CourseList";
// import PieChart from "../Graphs/ChartsPage";
import ChartsPage from "../Graphs/ChartsPage";
// import Sidebar from "../Navbar/Sidebar";
function StudentDashboard() {
  const [trial, setTrial] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/trial");
        setTrial(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(trial);
  
  return (
    <div className="master_container">
      {/* Navbar */}
      <Navbar role="Student" />

      {/* Top Pane */}

      <div className="not_Navbar">
        <div className="top">
          <img
            src={bell}
            alt="notif"
            className="notif_icon"
          />
          <h4> DASHBOARD</h4>
          <div className="logout_option">
            <p>LOGOUT</p>
            <img
              src={profile_img}
              alt="profile"
            />
          </div>
        </div>

        {/* Welcome Pane */}

        <div className="welcome">
          <div className="container1">
            <div className="text">
              <h2>Welcome ! Username</h2>
              <h3>This is your student Dashboard page</h3>
            </div>
            <div className="student_pic">
              <img
                src={stud1}
                alt="student"
              />
            </div>
          </div>
          <div className="stats">
            <div className="courses-completed">
              <div className="title">Courses Completed</div>
              <div className="number">12</div>
            </div>
            <div className="courses-enrolled">
              <div className="title">Courses Enrolled </div>
              <div className="number">25</div>
            </div>
          </div>
        </div>

        {/* Graph Section */}

        <div className="graphs">
          <ChartsPage />
        </div>

        {/* Courses Enrolled */}
        <div className="list1">{/* <CourseList /> */}</div>

        {/* Tutorials */}
        <img
          src=""
          alt="img1"
        />
      </div>
    </div>
  );
}

export default StudentDashboard;
