// Required Packages of NPM for backend and server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.port || 8080;

const MONGODB_URI =
  "mongodb+srv://Harshal:qbC3gIxRH46nMRXW@PrimaryCluster.cyybqip.mongodb.net/Database2";

mongoose.connect(MONGODB_URI || "mongodb://localhost/CourseList", {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
}); //two parameters first is the PORT or The server adress

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

// Schema
const Schema = mongoose.Schema;
const Course_List_Schema = new Schema(
  {
    name: String, // Name of the course
    description: String, // Description of the course
    tags: [String], // Array of tags related to the course
    videos: [String], // Array of video URLs or references
    createdAt: Date, // Date when the course was created
    updatedAt: Date, // Date when the course was last updated
  },
  { collection: "course_lists" }
);

//Model
const Cousre_List = mongoose.model("Course_List", Course_List_Schema);

//Saving Data to MongoDB
const data = {
  name: "Python Masterclass",
  description:
    "Learn basics of python in 2 weeks Get your hand on experience with our innovative projects after the 2 weeks session and grt a certificate of completion upon the course completion after 2 months of interactive training and learning.",
  tags: ["python", "coding", "bootcamp"], // Array of tags related to the course
  videos: ["1", "2"], // Array of video URLs or references
  createdAt: "", // Date when the course was created
  updatedAt: "", // Date when the course was last updated
};

const newCourse = new Cousre_List(data);

// Save the newCourse instance to the database

// newCourse
//   .save()
//   .then((savedCourse) => {
//     console.log("Data saved successfully:", savedCourse);
//   })
//   .catch((error) => {
//     console.log("Error saving data:", error);
//   });

// Saving Data using save()

app.use(morgan("tiny"));

//Routes inside our Server
/* eslint-disable */
/* prettier-ignore */
app.get("/api/", (req, res) => {
  Cousre_List.find({})
  .then((data) => {
    console.log("Data", data)
  });
});
/* eslint-enable */
app.get("/api/name", (req, res) => {
  res.json(data);
  console.log(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
