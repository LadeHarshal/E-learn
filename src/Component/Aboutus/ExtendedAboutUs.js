import React from "react";
import "./extendedabout.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/about-us.png";
import missionImg from "../../assets/images/misssion.jpg";
import valuesImg from "../../assets/images/value.png";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="About Us" className="img-fluid" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Welcome to our E-Learning Platform, where knowledge meets
                innovation. We are passionate about transforming education by
                providing a dynamic and interactive online learning experience.
                Our platform is designed to empower learners of all ages and
                backgrounds, offering a diverse range of courses curated by
                industry experts and experienced educators.
              </p>

              <div className="about__counter">
                <div className="d-flex justify-content-between">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patients Around the World</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Our Mission */}
        <Row className="mt-5">
          
          <Col lg="6" md="6">
            <div className="mission__content">
              <h3>Our Mission</h3>
              <p>
                Our mission is to make quality education accessible to everyone
                around the globe. We believe that education is the key to
                unlocking human potential and fostering positive change in
                society.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="mission__img">
              <img src={missionImg} alt="Our Mission" className="img-fluid" />
            </div>
          </Col>
        </Row>

        {/* Our Values */}
        <Row className="mt-5">
          <Col lg="6" md="6">
            <div className="values__img">
              <img src={valuesImg} alt="Our Values" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="values__content">
              <h3>Our Values</h3>
              <ul>
              <li>Excellence: We strive for excellence in everything we do.</li>
                <li>Innovation: We embrace innovation to continuously improve and adapt.</li>
                <li>Inclusivity: We foster an inclusive learning environment where diversity is celebrated.</li>
                <li>Collaboration: We believe in the power of collaboration and teamwork.</li>
                <li>Integrity: We uphold the highest standards of integrity and ethics.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
