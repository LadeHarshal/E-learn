// Required Packages of NPM for backend and server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
const Trial = mongoose.connection.collection("trials");
const student_data = mongoose.connection.collection("Student_data");
const Teacher = mongoose.connection.collection("teacher");
const Files = mongoose.connection.collection("files");
const Courses = mongoose.connection.collection("Courses");
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
app.get("/api/Student_data", async (req, res) => {
  try {
    const students = await student_data.find().toArray(); // Retrieve all documents from the collection
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/api/files", async (req, res) => {
  try {
    const binary_files = await Files.find().toArray(); // Retrieve all documents from the collection
    res.json(binary_files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/trial", async (req, res) => {
  try {
    const pdf_list = await Trial.find().toArray(); // Retrieve all documents from the collection
    res.json(pdf_list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
/* eslint-enable */

app.get("/api/teacher", async (req, res) => {
  try {
    const teacher = await Teacher.find().toArray(); // Retrieve all documents from the collection
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// adding courses
app.get("/api/Courses", async (req, res) => {
  try {
    const courses_data = await Courses.find().toArray(); // Retrieve all documents from the collection
    res.json(courses_data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// Middlewares
app.use(express.json());

// Adding temporary Login and registration pathway
// Teacher Registration Route
app.post("/register/teacher", async (req, res) => {
  try {
    const { username, useremail, courses, password } = req.body;

    // Insert the new teacher data into the 'teacher' collection
    await Teacher.insertOne({
      "Teacher Name": username,
      "Email ID": useremail,
      "Teaching experience": "",
      key: password,
      courses: [],
    });

    res.status(201).send("Teacher registered successfully");
  } catch (error) {
    console.error("Error registering teacher:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Student Registration Route
app.post("/register/Student_data", async (req, res) => {
  try {
    const { username, useremail, userrole, password } = req.body;
    // Insert a new document into the student collection at /api/student endpoint
    await student_data.insertOne({
      name: username,
      key: password,
      email: useremail,
    });
    res.status(201).send("Student registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid email or password");
    }
    const token = jwt.sign({ userId: user._id }, "secret_key");
    res.send({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
