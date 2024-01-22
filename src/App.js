import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import StudentDashboard from "./Component/Student Dashboard/StudentDashboard";
import StudentHome from "./Component/StudentHome/StudentHome";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        Component={Home}
      />
      <Route
        path="/StudentDashboard"
        Component={StudentDashboard}
      />
      <Route
        path="/StudentHome"
        Component={StudentHome}
      />
    </Routes>
  );
}

export default App;
