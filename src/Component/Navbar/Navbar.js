import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Group 5.png";
import Home_logo from "../../assets/images/Home (1).png";
import MYCourses_logo from "../../assets/images/Laptop.png";
import BrowseCourses_logo from "../../assets/images/Book.png";
import EditProfile_logo from "../../assets/images/ProfileEdit.png";
import profile_img from "../../assets/images/Group 4.png";

function Navbar(props) {
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
          <h4>{props.role}</h4>
        </div>
      </div>
      <div className="options">
        <ul>
          <li>
            <img
              src={Home_logo}
              alt="home"
            />
            <p>Home</p>
          </li>
          <li>
            <img
              src={MYCourses_logo}
              alt="home"
            />
            <p>Profile</p>
          </li>
          <li>
            <img
              src={BrowseCourses_logo}
              alt="home"
            />
            <p>Option3</p>
          </li>
          <li>
            <img
              src={EditProfile_logo}
              alt="home"
            />
            <p>Option4</p>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <h4>
          Start Learning Now <br></br> With this Wonderful Platform
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
