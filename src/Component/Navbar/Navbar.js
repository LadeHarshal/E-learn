import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_DiamondBkg.png";
import profile_img from "../../assets/images/Group 4.png";
import "./Navbar.css";
import VillaRoundedIcon from "@mui/icons-material/VillaRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";

const Navbar = React.memo(({ role = "Guest", onListItemClick, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleItemClick = (index) => {
    // Call the onListItemClick function with the clicked index
    onListItemClick(index);
    // console.log("set to", index);
  };
  let navItems;
  navItems = [
    {
      // path: "/StudentHome",
      label: "Home",
      icon: <VillaRoundedIcon />,
    },
    {
      // path: "/StudentDashboard",
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
  navItems = [
    {
      // path: "/StudentHome",
      label: "Home",
      icon: <VillaRoundedIcon />,
    },
    {
      // path: "/StudentDashboard",
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
  return (
    <div className="Container">
      {/* {console.log(typeof onListItemClick)} */}
      {/* {console.log(typeof onListItemClick)} */}
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
          <h3>{name}</h3>
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
                onClick={() => {
                  setSelectedIndex(index);
                  handleItemClick(index);
                }}
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
});

export default Navbar;
