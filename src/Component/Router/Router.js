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
import CourseMain from "../MainCoursePage/Coursemainpage.js";
import VideoPage from "../MainCoursePage/contentpage/Video.js";
import Progress from "../MainCoursePage/contentpage/Progress.js";
import Quiz from "../MainCoursePage/contentpage/Quiz.js";
import Notes from "../MainCoursePage/contentpage/Notes.js";
import PracticeSession from "../MainCoursePage/contentpage/PracticeSession.js";
import Aptitude from "../MainCoursePage/contentpage/Aptitude.js";
import PdfViewer from "../PDFViewer/PdfViewer.js";
import TutorialPage from "../../Pages/Tutorials/TutorialPage.js";
import VideoPlayer from "../VideoPlayer/VideoPlayer.js";

import SignupPage from "../../Pages/Signup.jsx";
import SigninPage from "../../Pages/Signin.jsx";

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
            <Header /> <SignupPage /> <Footer />
          </>
        }
      />

      {/* Path for Login page */}
      <Route
        path="/login"
        element={
          <>
            <Header /> <SigninPage/> <Footer />
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
        path="/coursemain"
        element={
          <>
            <Header /> <CourseMain /> <Footer />
          </>
        }
      />
      <Route
        path="/course/videos"
        element={
          <>
            <Header /> <VideoPage /> <Footer />
          </>
        }
      />
      <Route
        path="/course/Progress"
        element={
          <>
            <Header /> <Progress /> <Footer />
          </>
        }
      />
      <Route
        path="/course/notes"
        element={
          <>
            <Header /> <Notes /> <Footer />
          </>
        }
      />
      <Route
        path="/course/practice"
        element={
          <>
            <Header /> <PracticeSession /> <Footer />
          </>
        }
      />
      <Route
        path="/course/aptitude"
        element={
          <>
            <Header /> <Aptitude /> <Footer />
          </>
        }
      />
      <Route
        path="/course/quizzes"
        element={
          <>
            <Header /> <Quiz /> <Footer />
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
      <Route
        path="/ClientDashboard"
        element={<ClientDashboard />}
      />

      {/* Path for PDFViewer (to be changed after completion) */}
      <Route
        path="/tutorials"
        element={<TutorialPage />}
      />

      <Route
        path="/VideoPlayer"
        element={<VideoPlayer />}
      />
    </Routes>
  );
};
export default Router;
