import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/web-development.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";


const coursesData = [
  {
    id: "01",
    title: " Professional Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Comprehensive 2024 UI/UX Bootcamp for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>Immerse yourself in a world of knowledge with our diverse range of courses. From cutting-edge technology to creative arts, our featured courses cater to every interest and skill level. Learn from industry experts, engage in hands-on projects, and embark on a journey of continuous learning. Join our community and unlock new opportunities for personal and professional growth. Your learning adventure begins here!
                </p>
              </div>

              <div className="w-50 text-end">
                <Link to= '/courses'>
                <button className="btn">See All</button>
                </Link>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
