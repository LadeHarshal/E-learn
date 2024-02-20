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
import ClientDashboard from "../Client/ClientDashboard";
import BlogPage from "../Blog/BlogPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

import ExtendedAboutUs from "../Aboutus/ExtendedAboutUs";
import Termsofservice from "../Termsofservice/Termsofservice";
import CourseDetailsPage from "../MainCoursePage/CourseDetailsPage.js"; // Import CourseDetailsPage component
import ThankYou from "../MainCoursePage/Thankyou.js";
import PurchaseGuidePage from "../PurchaseGuide/PurchaseGuide.js";
import Support from "../Support/Support.js";
import PdfViewer from "../PDFViewer/PdfViewer.js";

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
            <Header /> <ExtendedAboutUs /> <Footer />
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
      <Route
        path="/courses/:id" // Define path for course details with course ID parameter
        element={
          <>
            <Header />
            <CourseDetailsPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/thankyou"
        element={
          <>
            <Header /> <ThankYou /> <Footer />
          </>
        }
      />
      <Route
        path="/support"
        element={
          <>
            <Header /> <Support /> <Footer />
          </>
        }
      />
      <Route
        path="/contactus"
        element={
          <>
            <Header /> <ContactUs /> <Footer />
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Header /> <BlogPage /> <Footer />
          </>
        }
      />

      <Route
        path="/privacypolicy"
        element={
          <>
            <Header /> <PrivacyPolicy /> <Footer />
          </>
        }
      />

      <Route
        path="/Termsofservice"
        element={
          <>
            <Header /> <Termsofservice /> <Footer />
          </>
        }
      />
      <Route
        path="/purchaseguide"
        element={
          <>
            <Header /> <PurchaseGuidePage /> <Footer />
          </>
        }
      />

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

      {/* Path for PDFViewer (to be changed after completion) */}
      <Route
        path="/tutorials"
        element={<PdfViewer />}
      />
    </Routes>
  );
};
export default Router;
