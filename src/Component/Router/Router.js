import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CoursesPage from "../MainCoursePage/CoursesPage";
import AboutUs from "../Aboutus/Aboutus";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/aboutus"
        element={<AboutUs />}
      />
      <Route
        path="/courses"
        element={<CoursesPage />}
      />
    </Routes>
  );
};
export default Router;
