// Required Packages of NPM for backend and server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.port || 8080;

const MONGODB_URI =
  "mongodb+srv://Harshal:qbC3gIxRH46nMRXW@primarycluster.cyybqip.mongodb.net/";

mongoose.connect(MONGODB_URI || "mongodb://localhost/CourseList", {
  useNewUrlparser: true,
  // useUnifiedTopology: true,
}); //two parameters first is the PORT or The server adress

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

// Schema
const Schema = mongoose.Schema;
const Course_List_Schema = new Schema({
  title: String,
  descriptiion: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const Cousre_List = mongoose.model("Course_List", Course_List_Schema);

//Saving Data to MongoDB
const data = {
  title: "Python Masterclass",
  descriptiion:
    "Learn basics of python in 2 weeks Get your hand on experience with our innovative projects after the 2 weeks session and grt a certificate of completion upon the course completion after 2 months of interactive training and learning.",
};

const newCourse = new Cousre_List(data);
// newCourse.save();
//Saving Data using save()

app.use(morgan("tiny"));

//Routes inside our Server
app.get("/api", (req, res) => {
  const data = {
    username: "harshal",
    age: 21,
  };

  Cousre_List.find({}).then((data) => {
    console.log("Data", data).catch((error) => {
      console.log(error);
    });
  });
});

app.get("/api/name", (req, res) => {
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
