import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_DiamondBkg.png";
import profile_img from "../../assets/images/Group 4.png";
import "./Navbar.css";
import MYCourses_logo from "../../assets/images/Laptop.png";
import BrowseCourses_logo from "../../assets/images/Book.png";
import VillaRoundedIcon from "@mui/icons-material/VillaRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
// import classNames from "./classNames";
// Define a mapping between icon names and components or elements
function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

function Navbar({ role = "Guest", isSelected = false }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  var setFlag = false;

  function handleflag(flag) {
    flag = true;
  }

  let navItems;
  if (role === "Student") {
    navItems = [
      { path: "/StudentHome", label: "Home", icon: <VillaRoundedIcon /> },
      {
        path: "/StudentDashboard",
        label: "Dashboard",
        icon: <ModeEditRoundedIcon />,
      },
      {
        path: "/contactus",
        label: "Help Me",
        icon: <AutoStoriesRoundedIcon />,
      },
      {
        path: "/tutorials",
        label: "Tutorials",
        icon: <HistoryEduRoundedIcon />,
      },
    ];
  } else {
    navItems = [
      { path: "/TeacherHome", label: "Home", icon: <VillaRoundedIcon /> },
      {
        path: "/TeacherDashboard",
        label: "Dashboard",
        icon: "EditProfile_logo",
      },
      { path: "/contactus", label: "Help Me", icon: BrowseCourses_logo },
      { path: "/tutorials", label: "Tutorials", icon: MYCourses_logo },
    ];
  }
  return (
    <div className="Container">
      <div className="icon">
        <img
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="profile-bar">
        <img
          src={profile_img}
          alt="img"
        />
        <div className="username">
          <h3>Username</h3>
          <h4>{role}</h4>
        </div>
      </div>
      <div className="options">
        <ul>
          {navItems.map((item, index) => {
            // Dynamically select the icon component based on item.icon
            return (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={index === selectedIndex ? "selected" : ""}
              >
                <Link to={item.path}>
                  {item.icon}
                  <p>{item.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bottom">
        <h4>
          Start Learning Now <br /> With this Wonderful Platform
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
