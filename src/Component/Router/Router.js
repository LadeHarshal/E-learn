import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CoursesPage from "../MainCoursePage/CoursesPage";
import AboutUs from "../Aboutus/Aboutus";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StudentDashboard from "../Student Dashboard/StudentDashboard";
import StudentHome from "../StudentHome/StudentHome";
import TeacherDashboard from "../Teacher/TeacherDashboard";
import ClientDashboard from "../Client/ClientDashboard";

const Router = () => {
  return (
    <Routes>
      {/* Main Path */}
      <Route
        path="/"
        element={
          <>
            <Header /> <Home /> <Footer />
          </>
        }
      />

      {/* Path for home page */}
      <Route
        path="/home"
        element={
          <>
            <Header /> <Home /> <Footer />
          </>
        }
      />

      {/* Path for Registration page */}
      <Route
        path="/register"
        element={
          <>
            <Header /> <Register /> <Footer />
          </>
        }
      />

      {/* Path for Login page */}
      <Route
        path="/login"
        element={
          <>
            <Header /> <Login /> <Footer />
          </>
        }
      />

      {/* Path for about us page */}
      <Route
        path="/aboutus"
        element={
          <>
            <Header /> <AboutUs /> <Footer />
          </>
        }
      />

      {/* Path for Courses Page */}
      <Route
        path="/courses"
        element={
          <>
            <Header /> <CoursesPage /> <Footer />
          </>
        }
      />

      {/* Path for student Dashboard */}
      <Route
        path="/StudentDashboard"
        element={<StudentDashboard />}
      />

      {/* Path for student Home */}

      <Route
        path="/StudentHome"
        element={<StudentHome />}
      />

      {/* Path for Teacher Dashboard */}

      <Route
        path="/TeacherDashboard"
        element={<TeacherDashboard />}
      />

      {/* Path for Client Dashboard */}
      <Route
        path="/ClientDashboard"
        element={<ClientDashboard />}
      />
    </Routes>
  );
};
export default Router;
