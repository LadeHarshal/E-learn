// Required Packages of NPM for backend and server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.port || 8080;

const MONGODB_URI =
  "mongodb+srv://Harshal:qbC3gIxRH46nMRXW@PrimaryCluster.cyybqip.mongodb.net/Database2"; //MongoDB database link

mongoose.connect(MONGODB_URI || "mongodb://localhost/CourseList", {
  useNewUrlParser: true,
}); //two parameters first is the PORT or The server adress

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

// Schema

// const Schema = mongoose.Schema;

const Course_List = mongoose.connection.collection("course_lists");
const student_data = mongoose.connection.collection("Student_data");
const Trial = mongoose.connection.collection("trials");
const Teacher = mongoose.connection.collection("teacher");

//Routes inside our Server
/* eslint-disable */
/* prettier-ignore */
app.get("/api/course_lists", async (req, res) => {
  try {
    const courses = await Course_List.find().toArray(); // Retrieve all documents from the collection
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
console.log(Trial);
app.get("/api/Student_data", async (req, res) => {
  try {
    const students = await student_data.find().toArray(); // Retrieve all documents from the collection
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/trial", async (req, res) => {
  try {
    const pdfs = await Trial.find().toArray(); // Retrieve all documents from the collection
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
/* eslint-enable */
app.get("/api/course_lists", (req, res) => {
  res.json(data);
  console.log(data);
});

app.get("/api/teacher", async (req, res) => {
  try {
    const teacher = await Teacher.find().toArray(); // Retrieve all documents from the collection
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
