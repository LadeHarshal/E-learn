import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from '../Firebase';
import loginImg from "../assets/images/login.jpg";
import userIcon from "../assets/images/user.png";
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
        <div className="Signin-page" style={styles.container}>
            <h2>Sign In</h2>
            <label style={styles.label}>Enter Your Email</label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                style={styles.input}
                placeholder="Enter Your Email Here"
            />
            <label style={styles.label}>Enter Your Password</label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                style={styles.input}
                placeholder="Enter Your Password Here"
            />
            <button onClick={signinUser} style={styles.button}>Sign In</button>
        </div>
    );
};

export default SigninPage;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "0 auto",
    },
    label: {
        marginBottom: "5px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "3px",
        border: "1px solid #ccc",
        boxSizing: "border-box",
    },
    button: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
    },
};
