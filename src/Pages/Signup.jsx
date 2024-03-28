import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";
import signupImage from "../assets/images/register.jpg"; // Importing the signup image
import googleLogo from "../assets/images/google-logo.png"; // Importing the Google logo
import "./SignUp.css"; // Importing custom CSS for styling
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  // For simultaneously creating a database in MongoDb

  // e.preventDefault();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async (e) => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("success")
    );
    let apiUrl = "http://localhost:8080/register/Student_data";
    const dname = email.split("@")[0];
    const uemail = email;
    try {
      console.log(
        "email",
        uemail,
        "auth",
        auth,
        "password",
        password,
        "xtra",
        dname
      );
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dname,
          courses_enrolled: [{}],
          email: uemail,
          key: password,
        }),
      });

      if (response.ok) {
        console.log("User created successfully");
        // Optionally, you can redirect to another page or show a success message to the user
      } else {
        console.error("Failed to create user");
        // Optionally, handle the error case
      }
    } catch (error) {
      console.error("Error:", error);
    }
    navigate("/Student");
  };

  const signupwithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-header">
          <h2>Sign Up</h2>
        </div>
        <div className="signup-form">
          <div className="signup-image">
            <img
              src={signupImage}
              alt="Signup"
            />
          </div>
          <div className="signup-inputs">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              placeholder="Enter your Email"
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
              placeholder="Enter your Password"
            />
            <button
              className="signup-button"
              onClick={createUser}
            >
              Sign Up
            </button>
            <div className="or-divider">
              <hr />
              <span>or</span>
              <hr />
            </div>
            <button
              className="google-signup-button"
              onClick={signupwithGoogle}
            >
              <img
                src={googleLogo}
                alt="Google Logo"
              />
              Sign Up With Google
            </button>
          </div>
        </div>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
