import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../Firebase';

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
}    
    return (
        <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>Sign Up</h2>
            <label style={{ marginBottom: '8px', display: 'block' }}>Email</label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder='Enter your Email'
                style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
            />
            <label style={{ marginBottom: '8px', display: 'block' }}>Password</label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder='Enter your Password'
                style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
            />
            <button
                onClick={createUser}
                style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
            >
                Sign Up
            </button>
            <br/>
           <center> <h5>or</h5> </center>
           <center>  <button onClick={signupwithGoogle}>Sign In With Google</button> </center>
        </div>
    );
};

export default SignupPage;
