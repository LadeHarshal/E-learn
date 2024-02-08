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
import ContactUs from "../ContactUs/ContactUs";
import BlogPage from "../Blog/BlogPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

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
<<<<<<< HEAD
      <Route path="/StudentDashboard" element={<StudentDashboard />} />
      <Route path="/StudentHome" element={<StudentHome />} />
      <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
=======
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
>>>>>>> b9635632d936ae8b87ce25d3c8cd53166c0175f2
    </Routes>
  );
};
export default Router;
