// CourseCard.js
import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./CoursePage.css"; // Import custom CSS for styling

const CourseCard = ({ title, image, description, price, reviews }) => {
  return (
    <Card className="custom-course-card">
      <CardImg top width="100%" src={image} alt={title} className="custom-course-image" />
      <CardBody className="custom-card-body">
        <CardTitle className="custom-course-title">{title}</CardTitle>
        <CardText className="custom-course-description">{description}</CardText>
        <div className="custom-course-footer">
          <CardText className="custom-course-price">Price: {price}</CardText>
          <CardText className="custom-course-reviews">Rating: {reviews}</CardText>
          <Button>Enroll Now</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
