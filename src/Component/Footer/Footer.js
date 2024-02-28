import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/primine_software_pvt_ltd_logo.jpeg";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "About US",
    url: "/aboutus",
  },

  {
    display: "Courses",
    url: "/courses",
  },

  {
    display: "Blog",
    url: "/blog",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacypolicy",
  },
  {
    display: "Support",
    url: "/support",
  },

  {
    display: "Purchases Guide",
    url: "/purchaseguide",
  },

  {
    display: "Terms of Service",
    url: "/TermsofService",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            lg="3"
            md="6"
            className="mb-4"
          >
            <h2 className=" d-flex align-items-center gap-1">
              <img
                src={logo}
                alt=""
                className="logo"
              ></img>
              E-Learning Platform
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col
            lg="3"
            md="6"
            className="mb-4"
          >
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link__item"
                >
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col
            lg="3"
            md="6"
            className="mb-4"
          >
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link__item"
                >
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col
            lg="3"
            md="6"
          >
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address:PSPL, Nagpur</p>
            <p> Phone: +91-1234567890 </p>
            <p>Email: example@gmail.com</p>
          </Col>

          <Col
            lg="12"
            className="text-center"
          >
            <p className="mb-0 mt-4">
              &copy; 2024 Primine Software Solutions. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
