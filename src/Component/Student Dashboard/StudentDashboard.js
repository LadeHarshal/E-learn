import React from "react";
import profile_img from "../Group 4.png";
import "./StudentDashboard.css";
import stud1 from "../Student1.png";
import bell from "../image 25.png";
import Navbar from "../Navbar/Navbar";
function StudentDashboard() {
  return (
    <div className="master_container">
      {/* Navbar */}

      <Navbar />

      {/* Top Pane */}

      <div className="not_Navbar">
        <div className="top">
          <img
            src={bell}
            alt="notif"
            className="notif_icon"
          />
          <h4>STUDENT DASHBOARD</h4>
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
          </div>
          <div className="student_pic">
            <img
              src={stud1}
              alt="student"
            />
          </div>
        </div>
        {/* Courses Enrolled */}
        {/* Tutorials */}
      </div>
    </div>
  );
}

export default StudentDashboard;
