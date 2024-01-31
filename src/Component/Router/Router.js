import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import DemoDash from "../../Pages/DemoDash";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StudentDashboard from "../Student Dashboard/StudentDashboard";
import TeacherDashboard from "../Teacher/TeacherDashboard";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/register"
        element={
          <>
            <Header />
            <Register />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        }
      />
      <Route
        path="/StudentDashboard"
        element={<StudentDashboard role="Student" />}
      />
      <Route
        path="/TeacherDashboard"
        element={<TeacherDashboard role="Teacher" />}
      />
    </Routes>
  );
};
export default Router;
