import React from "react";
import { Container, Button } from "reactstrap";
import logo from "../../assets/images/primine_software_pvt_ltd_logo.jpeg";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <h2 className="d-flex align-items-center">
            <img
              src={logo}
              alt=""
            ></img>
            E-Learning Platform
          </h2>

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
              <Button> Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
