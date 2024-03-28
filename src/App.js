// import './App.css';
// import Home from './Pages/Home';

// function App() {
//   return (
//     <div className="App">

//       <Home/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import CourseDetails from "./Component/Course_Details/CourseDetails";
import { app } from "./Firebase";
//external for login and logout

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth= getAuth(app);

function App() {

 const [user, setUser] = useState(null);

  useEffect(()=>{

    onAuthStateChanged(auth, user=> {
      if(user){
         // we are loged in
         setUser(user);
      } else{
        // we are loged out
        setUser(null);
      }
    });
   },[]);

if(user == null){
  return (
    <div className="App">
      <Layout>

      </Layout>

    </div>

  );
}

  return (
    <div className="App">
      <h1>Hello {user.email} </h1>
      <button onClick={()=> signOut(auth)}>logout</button>
    </div>

  );
}

export default App;
