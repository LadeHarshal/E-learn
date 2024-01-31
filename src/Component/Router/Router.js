import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CoursesPage from "../MainCoursePage/CoursesPage";
import AboutUs from "../Aboutus/Aboutus";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header /> <Home /> <Footer />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Header /> <Home /> <Footer />
          </>
        }
      />
      <Route
        path="/register"
        element={
          <>
            <Header /> <Register /> <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Header /> <Login /> <Footer />
          </>
        }
      />
      <Route
        path="/aboutus"
        element={
          <>
            <Header /> <AboutUs /> <Footer />
          </>
        }
      />
      <Route
        path="/courses"
        element={
          <>
            <Header /> <CoursesPage /> <Footer />
          </>
        }
      />
    </Routes>
  );
};
export default Router;
