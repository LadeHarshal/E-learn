import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import StudentDashboard from "../../Component/Student Dashboard/StudentDashboard";
import StudentHome from "../../Component/StudentHome/StudentHome";
import "./Student.css";
import search_btn from "../../assets/images/Search.png";
import Button from "@mui/joy/Button";
import profile_img from "../../assets/images/Group 4.png";
import { Logout } from "@mui/icons-material";
// For signout
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// For animations
function Student({ handleSignOut, auth }) {
  const handleLogout = () => {
    handleSignOut(); // Call the handleSignOut function passed as a prop
  };
  const role = "Student";
  let navigate = useNavigate();
  const location = useLocation();
  // console.log("Passed props ", auth);

  const [display, setDisplay] = useState("0");
  const handleListItemClick = useCallback((index) => {
    // Set the display state based on the clicked index
    if (index === 0) {
      setDisplay("0"); // Set display to "0" for StudentHome
    } else if (index === 1) {
      setDisplay("1"); // Set display to "1" for StudentDashboard
    }
  }, []);

  return (
    <div className="student-master-div">
      <div className="student-navbar">
        <Navbar
          role={role}
          name={
            auth.currentUser.displayName
              ? auth.currentUser.displayName
              : auth.currentUser.email.split("@")[0]
          }
          onListItemClick={handleListItemClick} // Pass the actual function
        />
      </div>
      <div className="not-navbar">
        <div className="top">
          {/* <h4>HOME</h4> */}
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
            <Button
              color="neutral"
              onClick={handleLogout}
              variant="outlined"
              startDecorator={<Logout />}
            >
              Logout
            </Button>
            {/* <button onClick={handleSignOut}>LOGOUT</button> */}

            <img
              src={profile_img}
              alt="profile"
            />
          </div>
        </div>

        {display === "0" && <StudentHome />}
        {display === "1" && <StudentDashboard />}
      </div>
    </div>
  );
}

export default Student;
