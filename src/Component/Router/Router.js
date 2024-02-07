import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CoursesPage from "../MainCoursePage/CoursesPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import StudentDashboard from "../Student Dashboard/StudentDashboard";
import StudentHome from "../StudentHome/StudentHome";
import TeacherDashboard from "../Teacher/TeacherDashboard";
import ContactUs from "../ContactUs/ContactUs";
import BlogPage from "../Blog/BlogPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import ExtendedAboutUs from "../Aboutus/ExtendedAboutUs"
import Termsofservice from "../Termsofservice/Termsofservice";
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
            <Header /> <ExtendedAboutUs /> <Footer />
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
      <Route
        path="/contactus"
        element={
          <>
            <Header /> <ContactUs/> <Footer />
          </>
        }
      />
       <Route
        path="/blog"
        element={
          <>
            <Header /> <BlogPage/> <Footer />
          </>
        } />

<Route
        path="/privacypolicy"
        element={
          <>
            <Header /> <PrivacyPolicy/> <Footer />
          </>
        } />
<Route
        path="/Termsofservice"
        element={
          <>
            <Header /> <Termsofservice/> <Footer />
          </>
        } />


      <Route  
        path="/StudentDashboard"
        element={<StudentDashboard />}
      />
      <Route
        path="/StudentHome"
        element={<StudentHome />}
      />
      <Route
        path="/TeacherDashboard"
        element={<TeacherDashboard />}
      />
    </Routes>
  );
};
export default Router;
