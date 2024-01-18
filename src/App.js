import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import StudentDashboard from "./Component/Student Dashboard/StudentDashboard";

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
    </Routes>
  );
}

export default App;
