import React from "react";
import { Container } from "reactstrap";
import CourseCard from "./CourseCard"; // Import the CourseCard component
import "./CoursePage.css"; // Import CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Newsletter from "../Newsletter/Newsletter.jsx";

import Img1 from './../../assets/images/Course 1.1 .jpg'
import Img2 from './../../assets/images/Course 1.2 .jpg'
import Img3 from './../../assets/images/Course 1.3 .jpg'
import Img4 from './../../assets/images/Course 1.4 .jpg'
import Img5 from './../../assets/images/course 1.5 .jpg'
import Img6 from './../../assets/images/Course 1.6 .jpg'
import Img7 from './../../assets/images/Course 1.7 .jpg'
import Img8 from './../../assets/images/course 1.8.webp'
import Img9 from './../../assets/images/Course 1.9 .jpg'
import Img10 from './../../assets/images/Course 1.10 .jpg'
import Img11 from './../../assets/images/Course 1.11.jpg'
import Img12 from './../../assets/images/Course 1.12 .jpg'

const courses = [
  {
    id: 1,
    title: 'Beginner Full Stack Web Development',
    image: Img1,
    description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React, Node.js, and MongoDB,gain hands-on experience with RESTful APIs.',
    price: '$49.99',
    reviews: 4.5,
  },
  {
    id: 2,
    title: 'Figma Mastery: Crafting Exceptional User Experiences',
    image: Img2,
    description:'Learn Figma - UI/UX, and master the art of designing beautiful and engaging mobile and web applications.',
    price: '$69.99',
    reviews: 4.8,
  },
  {
    id: 3,
    title: 'Certificate Course on Adobe Photoshop',
    image: Img3,
    description: 'Embark on a comprehensive journey through Adobe Photoshop with our Complete Course, covering all essential lessons.',
    price: '$59.99',
    reviews: 4.3,
  },
  {
    id: 4,
    title: 'Java Programming for Complete Beginners',
    image: Img4,
    description: 'Embark on a comprehensive journey to master essential Java skills and become a proficient developer. This course covers the fundamentals.',
    price: '$39.99',
    reviews: 4.7,
  },
  {
    id: 5,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    image: Img5,
    description: 'Master Python by building 100 projects in 100 days. Learn data science, build websites, apps!',
    price: '$54.99',
    reviews: 4.6,
  },
  {
    id: 6,
    title: 'Investing In Stocks The Complete Course! (17+ Hours)',
    image: Img6,
    description: 'Master Stock Market Investing & Trading in the Stock Market. Top 1% Instructor & Millionaire Investor. Invest & Trade!',
    price: '$49.99',
    reviews: 4.9,
  },
  {
    id: 7,
    title: 'The Complete Cyber Security Course : Hackers Exposed!',
    image: Img7,
    description: 'Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC.',
    price: '$79.99',
    reviews: 4.8,
  },
  {
    id: 8,
    title: 'The Data Analyst Course: Complete Data Analyst Bootcamp.',
    image: Img8,
    description: 'Complete Data Analyst Training: Python, NumPy, Pandas, Data Collection, Preprocessing, Data Types.',
    price: '$89.99',
    reviews: 4.7,
  },
  {
    id: 9,
    title: 'The Complete Cryptocurrency Course: More than 5 Courses in 1',
    image: Img9,
    description: 'Learn everything you need to know about cryptocurrency and blockchain, including investing.',
    price: '$59.99',
    reviews: 4.6,
  },
  {
    id: 10,
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    image: Img10,
    description: 'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Analytics & More!',
    price: '$74.99',
    reviews: 4.5,
  },
  {
    id: 11,
    title: 'The Ultimate Hands-On Hadoop: Tame your Big Data!',
    image: Img11,
    description: 'Data Engineering and Hadoop tutorial with MapReduce, HDFS, Spark, Flink, Hive, HBase, MongoDB, Cassandra, Kafka + more!',
    price: '$59.99',
    reviews: 4.4,
  },
  {
    id: 12,
    title: 'DevOps Beginners to Advanced with Projects - 2024',
    image: Img12,
    description: 'Begin DevOps Career As an Absolute Beginner | AWS, Linux, Scripts, Jenkins, Ansible, GitOps, Docker,Kubernetes, &ChatGPT ',   
    price: '$69.99',
    reviews: 4.6,
  },
];

const CoursesPage = () => {
  const NextArrow = (props) => (
    <div
      className="slick-arrow next-arrow"
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );

  const PrevArrow = (props) => (
    <div
      className="slick-arrow prev-arrow"
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Enable arrows for navigation
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="courses-page">
      <div className="background-image">
        <h1 className="text-center courses-heading">
          Drive into Our Comprehensive Course Library
        </h1>
      </div>
      <Container>
        <Slider {...settings}>
          {courses.map(course => (
            <div key={course.id} className="mb-4">
              <div className="d-flex justify-content-center mt-3">
                <CourseCard
                  id={course.id}
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  price={course.price}
                  reviews={course.reviews}
                />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
      <Newsletter/>
    </div>
  );
};

export default CoursesPage;
