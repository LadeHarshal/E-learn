import React from "react";
import { Link } from "react-router-dom";
import courseImg1 from "../../assets/images/web-design.png";

function CourseCard(props) {
  let { imgUrl, title, lesson, students, rating, id, tags } = props.item;
  let tag_list = [];
  let flag1 = false; // Declare flag1 variable outside of the conditional block

  // Check if props.item has _id to determine if it's coming from the database
  if (props.item._id) {
    imgUrl = courseImg1;
    title = props.item.name;
    tag_list = props.item.tags;
    flag1 = true;
  }

  return (
    <div>
      <div className="single__course__item">
        <div className="course__img">
          <img
            src={imgUrl}
            alt={title}
            className="w-100"
          />
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
            <Link
              to={`/courses/${id}`}
              className="enroll__link"
            >
              Enroll Now
            </Link>
          </div>

          {/* Conditional rendering based on flag1 */}
          {/* {flag1 ? (
            <div className="tags">
              <h4>Tags:</h4>
              {tag_list.map((item, index) => (
                <div
                  key={index}
                  className="student-home-tag"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="lesson d-flex align-items-center gap-1">
              <i className="ri-book-open-line"></i> {lesson} Lessons
            </div>
          )} */}

          {/* Render students and rating regardless of flag1 */}

          {/* <div className="d-flex justify-content-between align-items-center">
            <p className="students d-flex align-items-center gap-1">
              <i className="ri-user-line"></i> {students}K Students
            </p>
            <p className="rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {rating} Rating
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
