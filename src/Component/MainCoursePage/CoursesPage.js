// CoursesPage.js
import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseCard from "./CourseCard"; // Import the CourseCard component
import "./CoursePage.css"; // Import CSS for styling
import Img1 from './../../assets/images/Course 1.1 .jpg'
import Img2 from './../../assets/images/Course 1.2 .jpg'
import Img3 from './../../assets/images/Course 1.3 .jpg'
import Img4 from './../../assets/images/Course 1.4 .jpg'
import Img5 from './../../assets/images/course 1.5 .jpg'
import Img6 from './../../assets/images/Course 1.6 .jpg'
import Img7 from './../../assets/images/Course 1.7 .jpg'
import Img8 from './../../assets/images/Course 1.8 .jpg'
import Img9 from './../../assets/images/Course 1.9 .jpg'
import Img10 from './../../assets/images/Course 1.10 .jpg'
import Img11 from './../../assets/images/Course 1.11 .jpg'
import Img12 from './../../assets/images/Course 1.12 .jpg'



const courses = [
  {
    id: 1,
    title: 'Beginner Full Stack Web Development',
    image: Img1,
    description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node.',
    price: '$49.99',
    reviews: 4.5,
  },
  {
    id: 2,
    title: 'Figma Mastery: Crafting Exceptional User Experiences',
    image: Img2,
    description: 'Learn Figma - UI/UX, Learn to design a beautiful and engaging mobile app with Figma.',
    price: '$69.99',
    reviews: 4.8,
  },
  // Add more courses as needed
  {
    id: 3,
    title: 'Certificate Course on Adobe Photoshop',
    image: Img3,
    description: 'Complete Course which covers all the essential lessons about Adobe Photoshop.',
    price: '$59.99',
    reviews: 4.3,
  },
  {
    id: 4,
    title: 'Java Programming for Complete Beginners',
    image: Img4,
    description: 'Master essential Java skills, covering both fundamentals, to become a proficient developer',
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
  return (
    <div className="courses-page">
     <div className="background-image">
  <h1 className="text-center courses-heading">
    Drive into Our Comprehensive Course Library
  </h1>
</div>
      <Container>
        <Row xs="1" sm="2" md="4">
          {courses.map(course => (
            <Col key={course.id} className="mb-4">
              <div className="d-flex justify-content-center mt-3">
                <CourseCard
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  price={course.price}
                  reviews={course.reviews}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CoursesPage;
