import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase';
import signupImage from "../assets/images/register.jpg"; // Importing the signup image
import googleLogo from '../assets/images/google-logo.png'; // Importing the Google logo
import './SignUp.css'; // Importing custom CSS for styling
import { Link } from 'react-router-dom';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'));
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
                        <img src={signupImage} alt="Signup" />
                    </div>
                    <div className="signup-inputs">
                        <label>Email</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder='Enter your Email'
                        />
                        <label>Password</label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                            placeholder='Enter your Password'
                        />
                        <button className="signup-button" onClick={createUser}>
                            Sign Up
                        </button>
                        <div className="or-divider">
                            <hr />
                            <span>or</span>
                            <hr />
                        </div>
                        <button className="google-signup-button" onClick={signupwithGoogle}>
                            <img src={googleLogo} alt="Google Logo" />
                            Sign Up With Google
                        </button>
                    </div>
                </div>
                <div className="login-link">
    <p>Already have an account? <Link to="/login">Login</Link></p>
</div>
            </div>
        </div>
    );
};

export default SignupPage;
