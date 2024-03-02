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

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/xyz" element={<CourseDetails/>}/>
      </Routes>
      </Layout>

    </div>

  );
}

export default App;
