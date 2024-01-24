import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import heroImg from "../../assets/images/Group 44.png";
import "./heroscetion.css";
// import StudentDashboard from "../Student Dashboard/StudentDashboard";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col
            lg="6"
            md="6"
            className="whitebg"
          >
            <div className="clipped-circle-top"></div>
            <div className="clipped-circle-left"></div>
            <div className="clipped-circle-right"></div>
            <div className="clipped-circle-bottom"></div>

            <div className="hero__content">
              <h2 className="mb-4">
                Let The Journey
                <br />
                For a better
                <br />
                <span className="learning">Learning</span>
                <br />
                begin now
              </h2>
              <p>Click the below button to start registration.</p>
            </div>
            <div className="hero__button align-items-center gap-5">
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </Col>

          <Col
            lg="6"
            md="6"
            className="bluebg"
          >
            <img
              src={heroImg}
              alt=""
              className="w-100"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
