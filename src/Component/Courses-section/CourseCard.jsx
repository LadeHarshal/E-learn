import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, id } = props.item;
=======
import courseImg1 from "../../assets/images/web-design.png";
const CourseCard = (props) => {
  // console.log(props.item);
>>>>>>> 73fdc8b550904f80d7e8b90714bcdd8fe48ea04a

  var { imgUrl, title, lesson, students, rating } = props.item;
  var tag_list = [];
  /// COde for displaying course details from data base
  if (props.item._id) {
    imgUrl = courseImg1;
    title = props.item.name;
    // lesson = props.item.tags;
    tag_list = props.item.tags;
    var flag1 = true;
  }
  // console.log(tag_list);
  return (
    <div className="single__course__item">
      <div className="course__img">
<<<<<<< HEAD
        <img src={imgUrl} alt={title} className="w-100" />
=======
        <img
          src={imgUrl}
          alt=""
          className="w-100"
        />
>>>>>>> 73fdc8b550904f80d7e8b90714bcdd8fe48ea04a
      </div>

      <div className="course__details">
        <h6 className="course__title mb-2">{title}</h6>

<<<<<<< HEAD
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
=======
        <div className=" d-flex justify-content-between align-items-center">
          {flag1 ? (
            <p className="tags d-flex align-items-center gap1">
              <div className="tags">
                <h4>Tags : </h4>
                {tag_list.map((item) => (
                  <div className="student-home-tag">{item}</div>
                ))}
              </div>
            </p>
          ) : (
            <p className="lesson d-flex align-items-center gap-1">
              <i className="ri-book-open-line"></i> {lesson} Lessons
            </p>
          )}

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

          {flag1 ? (
            <></>
          ) : (
            <p className="enroll d-flex align-items-center gap-1">
              <a href="#"> Enroll Now</a>
            </p>
          )}
>>>>>>> 73fdc8b550904f80d7e8b90714bcdd8fe48ea04a
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
