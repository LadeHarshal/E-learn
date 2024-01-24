import axios from "axios";

const API_URL = "http://localhost:8080/api/name"; // Replace with your actual API endpoint

const getAllCourses = () => axios.get(API_URL);
const createCourse = (data) => axios.post(API_URL, data);
const updateCourse = (id, data) => axios.put(`${API_URL}/${id}`, data);
const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
