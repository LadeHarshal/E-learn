import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, id } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt={title} className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-2">{title}</h6>

        <div className="course__info">
          <p className="lesson">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students">
            <i className="ri-user-line"></i> {students}K Students
          </p>

          <p className="rating">
            <i className="ri-star-fill"></i> {rating} Rating
          </p>
        </div>

        <div className="enroll">
          <Link to={`/courses/${id}`} className="enroll__link">Enroll Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
