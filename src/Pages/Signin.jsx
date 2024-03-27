import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from '../Firebase';
import loginImg from "../assets/images/login.jpg";
import "./SignIn.css"; // Import the CSS file

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => console.log('Signin Success'))
            .catch(err => console.log(err));
    }

    return (
        <div className="signin-container">
            <div className="signin-content">
                <div className="signin-header">
                    <h2 >Sign In</h2>
                     </div>
                <div className="signin-form">
                <div className="signin-image"> 
                    <img src={loginImg} alt="Login" />
                </div>
                <div className="signin-inputs"> 
                    <label className="signin-inputs-label">Enter Your Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="signin-inputs-input" 
                        placeholder="Enter Your Email Here"
                    />
                    <label className="signin-inputs-label">Enter Your Password</label> 
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="signin-inputs-input" 
                        placeholder="Enter Your Password Here"
                    />
                    <button onClick={signinUser} className="signin-button">Sign In</button>
                </div>
            </div>
            <div className="login-link">
                    <p>Don't have an account? <a href="/register">Sign Up</a></p>
                </div>
            </div>
            </div>
       
    );
};

export default SigninPage;
