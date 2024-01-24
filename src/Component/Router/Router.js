import React from "react";
import {Routes , Route} from 'react-router-dom';
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";



const Router = () => {

    return(
<Routes>
  
<Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
</Routes>
    )
    
};
export default Router;