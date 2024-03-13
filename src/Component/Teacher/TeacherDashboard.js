import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import profile_img from "../../assets/images/Group 4.png";
import bell from "../../assets/images/image 25.png";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  // Fetching and setting TeacherData from (line 10-24)
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher");
        setTeacherData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!teacherData) {
    return <div>Loading...</div>;
  }
  console.log(teacherData[0]);
  let teacherName = teacherData[0]["Teacher Name"];
  let teacherExp = teacherData[0]["Teaching experience"];

  return (
    <div className="TD">
      {/* <CoursePage /> */}
      <Navbar role="Teacher" />
      {/** props to be passed as required  */}

      <div className="notnav">
        {/*Top Bar */}
        <div className="top">
          <img
            src={bell}
            alt="notif"
            className="notif_icon"
          />
          <h4>Teacher Dashboard</h4>
          <div className="logout_option">
            <p>LOGOUT</p>
            <img
              src={profile_img}
              alt="profile"
            />
          </div>
        </div>
        {/* Top Bar Ends */}

        {/* Middle bar starts */}

        {/* Table */}
        <div className="table">
          <h2 className="TableHead">Teacher Table</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Teacher Name</th>
                <th scope="col">Description</th>
                <th scope="col">Manage</th>
              </tr>
            </thead>
            <tbody>
              {/*  */}

              {teacherData ? (
                <tr>
                  <th scope="row">1</th>
                  <td>{teacherData[0]["Teacher Name"]}</td>
                  <td>{teacherName}</td>
                  <td>{teacherExp}</td>
                  <td></td>
                </tr>
              ) : (
                <tr>
                  <th></th>
                  <td>loading</td>
                  <td>loading</td>
                  <td>loading</td>
                </tr>
              )}

              {/*  */}
              <tr>
                <th scope="row">2</th>
                <td>CPP</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  commodi alias consequuntur necessitatibus, dicta voluptatum
                  delectus vitae rerum beatae dolore magnam harum quasi amet
                  cupiditate iure ea mollitia eius excepturi?
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Java</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt molestias obcaecati tenetur rerum reiciendis soluta
                  amet incidunt, at natus. Nesciunt expedita maiores dicta sint
                  dignissimos dolor earum, ab nam quam.
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
