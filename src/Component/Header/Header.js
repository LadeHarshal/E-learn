import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from 'react-router-dom'; 
import logo from "../../assets/images/primine_software_pvt_ltd_logo.jpeg";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "About Us",
    url: "/aboutus",
  },
  {
    display: "Contact",
    url: "/contactus",
  }
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
        <Link to="/home" className="d-flex align-items-center main__heading">
            <img
              src={logo}
              alt=""
            ></img>
            <h2>E-Learning Platform</h2>
          </Link>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="nav__items"
                  >
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="button d-flex align-items-center gap-5">
             <Link to="/register"> <Button>SIGN UP</Button></Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
