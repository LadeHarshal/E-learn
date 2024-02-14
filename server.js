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
    image: String, //Display image for CourseCard
    tags: [String], // Array of tags related to the course
    videos: [String], // Array of video URLs or references
    createdAt: Date, // Date when the course was created
    updatedAt: Date, // Date when the course was last updated
  },
  { collection: "course_lists" }
);

const Trial_Schema = new Schema({
  _id: String,
  image: Buffer,
  pdf: Buffer,
  image_url: String,
  pdf_url: String,
});
const Trial = mongoose.model("trial", Trial_Schema);
//Model

const Cousre_List = mongoose.model("Course_List", Course_List_Schema);

//Routes inside our Server
/* eslint-disable */
/* prettier-ignore */
app.get("/api/course_lists", (req, res) => {
  Cousre_List.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/api/trial", (req, res) => {
  Trial.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});
/* eslint-enable */
app.get("/api/course_lists", (req, res) => {
  res.json(data);
  console.log(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
