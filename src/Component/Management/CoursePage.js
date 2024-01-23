// CoursePage.js
import React, { useState, useEffect } from "react";
import CourseService from "./Management";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    tags: "",
    videos: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    CourseService.getAllCourses().then((response) => setCourses(response.data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CourseService.createCourse(newCourse).then(() => {
      fetchCourses();
      setNewCourse({ name: "", description: "", tags: "", videos: "" });
    });
  };

  const handleUpdate = (id) => {
    // Implement update logic using CourseService.updateCourse
    // Fetch the updated list of courses after updating
  };

  const handleDelete = (id) => {
    // Implement delete logic using CourseService.deleteCourse
    // Fetch the updated list of courses after deleting
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newCourse.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newCourse.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tags:
          <input
            type="text"
            name="tags"
            value={newCourse.tags}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Videos:
          <input
            type="text"
            name="videos"
            value={newCourse.videos}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Course</button>
      </form>
      <h3>Course List</h3>
      <ul>
        {console.log(courses)}
        {courses.map((course) => (
          <li key={course._id}>
            {course.name} - {course.description}
            <button onClick={() => handleUpdate(course._id)}>Update</button>
            <button onClick={() => handleDelete(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
