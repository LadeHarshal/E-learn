import React from "react";
import Layout from "./Component/Layout/Layout";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import CourseDetails from "./Component/Course_Details/CourseDetails";
import { app } from "./Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
// Importing all required Pages
import Home from "./Pages/Home";
import CoursesPage from "./Component/MainCoursePage/CoursesPage.js";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import StudentDashboard from "./Component/Student Dashboard/StudentDashboard";
import StudentHome from "./Component/StudentHome/StudentHome";
import TeacherDashboard from "./Component/Teacher/TeacherDashboard";
import ContactUs from "./Component/ContactUs/ContactUs";
import ClientDashboard from "./Component/Client/ClientDashboard";
import Student from "./Pages/Student/Student";
import TutorialPage from "./Pages/Tutorials/TutorialPage.js";
import VideoPlayer from "./Component/VideoPlayer/VideoPlayer.js";
import ExtendedAboutUs from "./Component/Aboutus/ExtendedAboutUs";

import SignupPage from "./Pages/Signup.jsx";
import SigninPage from "./Pages/Signin.jsx";
const auth = getAuth(app);
// console.log("app variable", app);
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // navigate("", { state: { userId: user.uid, user: user } });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  // useEffect(() => {
  //   if (user !== null) {
  //     navigate("/Student", { state: { userId: user.uid, user: user } });
  //   }
  // }, [user, navigate]);

  if (user === null) {
    return (
      <div className="App">
        <Layout>
          <Routes>
            <Route
              path="/xyz"
              element={<CourseDetails />}
            />
          </Routes>
        </Layout>
      </div>
    );
  }
  // Signout Handler
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigate("/login"); // Redirect to the sign-in page after sign out
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };
  return (
    <div className="App">
      {/* <button onClick={() => handleSignOut(auth)}>Logout</button> */}
      <Routes>
        {console.log("This is user ", user.email.split("@")[1].split(".")[0])}
        {user.email.split("@")[1].split(".")[0] === "org" ? (
          <Route
            path="/TeacherDashboard"
            element={
              <TeacherDashboard
                handleSignOut={handleSignOut}
                auth={auth}
              />
            }
          />
        ) : (
          <Route
            path="/Student"
            element={
              <Student
                handleSignOut={handleSignOut}
                auth={auth}
              />
            }
          />
        )}
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
        {/* <Route
          path="/TeacherDashboard"
          element={<TeacherDashboard />}
        /> */}
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
              <Header /> <SigninPage /> <Footer />
              <Header /> <SigninPage /> <Footer />
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
          path="/contactus"
          element={
            <>
              <Header /> <ContactUs /> <Footer />
            </>
          }
        />
      </Routes>
    </div>
    // <></>
  );
}

export default App;
