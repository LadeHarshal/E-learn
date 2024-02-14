import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./CourseDetailsPage.css"; // Import custom CSS for styling

import Img1 from './../../assets/images/Course 1.1 .jpg';
import Img2 from './../../assets/images/Course 1.2 .jpg';
import Img3 from './../../assets/images/Course 1.3 .jpg';
import Img4 from './../../assets/images/Course 1.4 .jpg';
import Img5 from './../../assets/images/course 1.5 .jpg';
import Img6 from './../../assets/images/Course 1.6 .jpg';
import Img7 from './../../assets/images/Course 1.7 .jpg';
import Img8 from './../../assets/images/course 1.8.webp';
import Img9 from './../../assets/images/Course 1.9 .jpg';
import Img10 from './../../assets/images/Course 1.10 .jpg';
import Img11 from './../../assets/images/Course 1.11.jpg';
import Img12 from './../../assets/images/Course 1.12 .jpg';

const CourseDetailsPage = () => {
  const { id } = useParams(); // Get the course ID from URL parameters
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    gender: "Male",
    country: "",
    city: "",
    state: "",
    pincode: ""
  });

  // Define course data
  const courses = [
    {
      id: 1,
      title: 'Beginner Full Stack Web Development',
      image: Img1,
      description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React, Node.js, and MongoDB, gain hands-on experience with RESTful APIs.',
      price: '$49.99',
      reviews: 4.5,
    },
    {
      id: 2,
      title: 'Figma Mastery: Crafting Exceptional User Experiences',
      image: Img2,
      description: 'Learn Figma - UI/UX, and master the art of designing beautiful and engaging mobile and web applications.',
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
      description: 'Begin DevOps Career As an Absolute Beginner | AWS, Linux, Scripts, Jenkins, Ansible, GitOps, Docker,Kubernetes, &ChatGPT ',   
      price: '$69.99',
      reviews: 4.6,
    },
  ];

  // Find the course with the matching ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>; // Display message if course not found
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    // Validate form data
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form submitted with data:", formData);
      // Redirect to thank you page after form submission
      // history.push("/thankyou");
    } else {
      alert("Please fill all required fields.");
    }
  }

  // Function to validate form data
  function validateForm() {
    const { name, email, contact, address, country, city, state, pincode } = formData;
    return name && email && contact && address && country && city && state && pincode;
  }

  // Function to handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card className="course-card">
            <CardImg top src={course.image} alt={course.title} className="course-image" />
            <CardBody>
              <h2 className="course-title">{course.title}</h2>
              <p className="text-muted specific-para">Price: {course.price}</p>
              <p className="specific-para">Rating: {course.reviews}</p>
              <p className="specific-para">{course.description}</p>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <h3 className="form-title">Book This Course</h3>
          <Form className="booking-form" onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="contact">Contact</Label>
              <Input type="text" name="contact" id="contact" placeholder="Your contact number" value={formData.contact} onChange={handleInputChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" id="address" placeholder="Your address" value={formData.address} onChange={handleInputChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="select" name="gender" id="gender" value={formData.gender} onChange={handleInputChange} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input type="text" name="country" id="country" placeholder="Your country" value={formData.country} onChange={handleInputChange} required />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" name="city" id="city" placeholder="Your city" value={formData.city} onChange={handleInputChange} required/>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input type="text" name="state" id="state" placeholder="Your state" value={formData.state} onChange={handleInputChange} required />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="pincode">Pincode</Label>
                  <Input type="text" name="pincode" id="pincode" placeholder="Your pincode" value={formData.pincode} onChange={handleInputChange} required/>
                </FormGroup>
              </Col>
            </Row>
            <Link to="/thankyou"><Button color="primary" className="mt-3 btn-lg book">Enroll Now</Button></Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetailsPage;
