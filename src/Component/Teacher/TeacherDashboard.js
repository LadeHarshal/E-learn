import React from "react";
import Navbar from "../Navbar/Navbar";
import profile_img from "../../assets/images/Group 4.png";
import bell from "../../assets/images/image 25.png";
import TD_Courses from "../../assets/images/TD_Courses.png";
import TD_Students from "../../assets/images/TD_Students.png";
import TD_Sold from "../../assets/images/TD_Sold.png";
// import CoursePage from "../Management/CoursePage";
import "./TeacherDashboard.css";
function TeacherDashboard() {
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
        <div className="middle">
          {/* first element */}
          <div className="CountBox CourseCount">
            <div className="head">
              <img
                src={TD_Courses}
                alt="courses"
              />
              <p>Courses</p>
            </div>
            <hr></hr>
            <div className="display">
              <h2>20</h2>{" "}
              {/* This will be the Count of unique students in the database who have enrolled this teacher's courses   */}
            </div>
          </div>

          {/* Second Element */}
          <div className="CountBox StudentCount">
            <div className="head">
              <img
                src={TD_Students}
                alt="student"
              />
              <p>Students</p>
            </div>
            <hr></hr>
            <div className="display">
              <h2>20</h2>{" "}
              {/* This will be the Count of unique students in the database who have enrolled this teacher's courses   */}
            </div>
          </div>

          {/* Third Element */}
          <div className="CountBox SoldCount">
            <div className="head">
              <img
                src={TD_Sold}
                alt="courses"
              />
              <p>Sales</p>
            </div>
            <hr></hr>
            <div className="display">
              <h2>20</h2>{" "}
              {/* This will be the Count of unique students in the database who have enrolled this teacher's courses   */}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table">
          <h2 className="TableHead">Course management Table</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CourseName</th>
                <th scope="col">Description</th>
                <th scope="col">Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Python</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae nemo porro itaque laborum, impedit enim dolore repellat,
                  quasi corporis similique laudantium. Iste nobis quis ea,
                  corporis consequatur architecto sit mollitia!
                </td>
                <td></td>
              </tr>
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
