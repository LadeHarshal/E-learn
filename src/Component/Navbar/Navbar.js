import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_DiamondBkg.png";
import profile_img from "../../assets/images/Group 4.png";
import "./Navbar.css";
// import classNames from "./classNames";

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

function Navbar({ navItems = [], role = "Guest", isSelected }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  var setFlag = false;

  function handleflag(flag) {
    flag = true;
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
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              className={`${isSelected ? "selected" : ""}`}
            >
              <Link to={item.path}>
                <img
                  src={item.icon}
                  alt={item.label}
                />
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
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
