import React, { useState, useEffect } from "react";
import axios from "axios";
// import Navbar from "../Navbar/Navbar";
import profile_img from "../../assets/images/Group 4.png";
import bell from "../../assets/images/image 25.png";
import "./TeacherDashboard.css";
// For the Navbar
import logo from "../../assets/images/Logo_DiamondBkg.png";
import {
  AddCard,
  DashboardCustomizeOutlined,
  HelpOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import MYCourses_logo from "../../assets/images/Laptop.png";

// For Teacher Bio Card
// import Avatar from "@mui/joy/Avatar";
import DefaultTeacherImage from "../../assets/images/TeacherDefault.jpg";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Skeleton from "@mui/joy/Skeleton";
// import CourseForm from "./CourseForm";

// For the input for new courses
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import CourseForm from "./CourseForm";
function TeacherDashboard() {
  const role = "Teacher";
  const [selectedIndex, setSelectedIndex] = useState(null);

  const navItems = [
    { label: "Add Course", icon: <AddCard /> },
    {
      path: "/TeacherDashboard",
      label: "Dashboard",
      icon: <DashboardCustomizeOutlined />,
    },
    { path: "/contactus", label: "Get Help", icon: <HelpOutline /> },
  ];
  // Fetching and setting TeacherData from (line 10-24)
  const [teacherData, setTeacherData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher");
        setTeacherData(response.data);
        console.log("Fetched teacher data:", response.data);
        const courseResponse = await axios.get(
          "http://localhost:8080/api/courses"
        );
        setCourseData(courseResponse.data[0].courses);
        console.log("Fetched course data:", courseResponse.data[0].courses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log("Course Ids", teacherData[0].Course);

  // handling Add Course Form Data

  return (
    <div className="TD">
      {/* <CoursePage /> */}
      {/* <Navbar
        role="Teacher"
        data={teacherData}
      /> */}
      <div className="TeacherNavbar">
        <div className="Container">
          <div className="icon">
            <img
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="profile-bar">
            <img
              src={profile_img}
              alt="img"
            />
            <div className="username">
              <h3>Username</h3>
              <h4>{role}</h4>
            </div>
          </div>
          <div className="options">
            <ul>
              {navItems.map((item, index) => {
                // Dynamically select the icon component based on item.icon
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      if (index === 0) {
                        setOpen(true);
                      }
                    }}
                    className={index === selectedIndex ? "selected" : ""}
                  >
                    <Modal
                      open={open}
                      onClose={() => setOpen(false)}
                    >
                      <ModalDialog>
                        <DialogTitle>Create new Course</DialogTitle>
                        <DialogContent>
                          Fill in the information of the Course to be added.
                        </DialogContent>
                        <CourseForm />
                      </ModalDialog>
                    </Modal>
                    <Link to={item.path}>
                      {item.icon}
                      <p>{item.label}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
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
        {/* Teacher Profile */}

        {/*  */}
        {/* Table */}
        <div className="TeacherBio">
          {/*  */}

          {teacherData.length > 0 && teacherData[3]["Teacher Name"] ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  overflow: { xs: "auto", sm: "initial" },
                }}
              >
                <Card
                  orientation="horizontal"
                  sx={{
                    width: "100%",
                    flexWrap: "wrap",
                    [`& > *`]: {
                      "--stack-point": "500px",
                      minWidth:
                        "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                    },
                    // make the card resizable for demo
                    overflow: "auto",
                    resize: "horizontal",
                  }}
                >
                  <AspectRatio
                    flex
                    ratio="1"
                    maxHeight={182}
                    sx={{ minWidth: 182 }}
                  >
                    <img
                      src={DefaultTeacherImage}
                      srcSet={DefaultTeacherImage}
                      loading="lazy"
                      alt={teacherData[3]["Teacher Name"]}
                    />
                  </AspectRatio>
                  <CardContent>
                    <Typography
                      fontSize="xl"
                      fontWeight="lg"
                    >
                      {teacherData[3]["Teacher Name"]}
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      Senior Lecturer
                    </Typography>

                    <Sheet
                      sx={{
                        bgcolor: "background.level1",
                        borderRadius: "sm",
                        p: 1.5,
                        my: 1.5,
                        display: "flex",
                        gap: 2,
                        "& > div": { flex: 1 },
                      }}
                    >
                      <div>
                        <Typography
                          level="body-xs"
                          fontWeight="lg"
                        >
                          Experience
                        </Typography>
                        <Typography fontWeight="lg">
                          {teacherData[3]["Teaching experience"]}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          level="body-xs"
                          fontWeight="lg"
                        >
                          Courses Published
                        </Typography>
                        <Typography fontWeight="lg">
                          {teacherData[3].Course.length}
                        </Typography>
                      </div>
                    </Sheet>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        "& > button": { flex: 1 },
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="neutral"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="solid"
                        color="primary"
                      >
                        Add Course
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              {/* Include other columns as needed */}
            </>
          ) : (
            <Card
              variant="outlined"
              sx={{ width: 500, display: "flex", gap: 2 }}
            >
              <AspectRatio ratio="21/9">
                <Skeleton variant="overlay">
                  <img
                    alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </Skeleton>
              </AspectRatio>
              <Typography>
                <Skeleton>
                  The Content is taking time to load , try refreshing if it
                  takes more than 10 seconds
                </Skeleton>
              </Typography>
            </Card>
          )}
          {/* Course List of Teacher */}
          {/* <CourseForm /> */}

          <div className="TeacherCourseData">
            asfd
            {courseData.map(
              (course) =>
                teacherData[3].Course.includes(course.CID) && (
                  <div key={course.CID}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    {console.log(course)}
                    {/* Add more course details as needed */}
                  </div>
                )
            )}
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
