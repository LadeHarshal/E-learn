import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./CoursePage.css"; // Import custom CSS for styling

const CourseCard = ({ id, title, image, description, price, reviews }) => {
  return (
    <Card className="custom-course-card">
      <CardImg top width="100%" src={image} alt={title} className="custom-course-image" />
      <CardBody className="custom-card-body">
        <CardTitle className="custom-course-title">{title}</CardTitle>
        <CardText className="custom-course-description">{description}</CardText>
        <div className="custom-course-footer">
          <CardText className="custom-course-price">Price: {price}</CardText>
          <CardText className="custom-course-reviews">Rating: {reviews}</CardText>
          <Link to={`/courses/${id}`}>
          <Button className="custom-course-button" style={{ backgroundColor: "#17bf9e" }}>Enroll Now</Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default CourseCard;

