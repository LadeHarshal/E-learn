import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Rapidly advance your skills with our quick learning approach",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Experience unwavering and dedicated all-time support on your learning journey.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Unlock certifications, validate and showcase your skills globally",
    icon: "ri-contacts-book-line",
  },
  
  {
    title: "Interactive Learning",
    desc: "Engage with interactive lessons to enhance your learning experience",
    icon: "ri-brush-4-line",
  }
];

const Features = () => {
  return (
    <section>
      <Container>
        <h1 className="features-heading">Our Best Features</h1>
        <Row>
          {FeatureData.map((item, index) => (
            <Col  key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p className="parag">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
