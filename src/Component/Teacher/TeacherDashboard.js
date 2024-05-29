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
import DrawTwoToneIcon from "@mui/icons-material/DrawTwoTone";
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
import { Logout } from "@mui/icons-material";

// For Course Display Card in Teacher dashboard
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import CardCover from "@mui/joy/CardCover";
// import Link from '@mui/joy/Link';

// For the input for new courses
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import CourseForm from "./CourseForm";
import { Triangle } from "react-loader-spinner";
function TeacherDashboard({ handleSignOut, auth }) {
  const handleLogout = () => {
    handleSignOut(); // Call the handleSignOut function passed as a prop
  };
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
  const [loading, setLoading] = useState(true);

  // Getting data of all the teachers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher");
        setTeacherData(response.data);
        // console.log("Fetched teacher data:", response.data);
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

  // Loading Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 4 seconds
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // Function to finda coressponding TeacherData
  function findArrayByEmail(emailToFind) {
    return teacherData.find((data) => data["Email ID"] === emailToFind);
  }

  // Render loading indicator after 4 seconds
  if (loading) {
    return (
      <div className="loading">
        <Triangle
          visible={true}
          height="150"
          width="150"
          color="#87ceeb"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else {
    if (auth) {
      // MAtched Data is saved
      const matchingData = findArrayByEmail(auth.currentUser.email);

      if (matchingData) {
        // console.log("Matching data:", matchingData);
      } else {
        console.log(
          "No matching data found for email:",
          auth.currentUser.email
        );
      }
      return (
        <div className="TD">
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
                  <h3>
                    {auth.displayName
                      ? auth.displayName
                      : auth.currentUser.email.split("@")[0]}
                  </h3>
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
                            <CourseForm email={auth.currentUser.email} />
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
                <Button
                  color="neutral"
                  onClick={handleLogout}
                  variant="outlined"
                  startDecorator={<Logout />}
                >
                  Logout
                </Button>
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

              {matchingData ? (
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
                      <Card
                        variant="plain"
                        sx={{
                          width: 300,
                          bgcolor: "initial",
                          p: 0,
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <AspectRatio ratio="5/4">
                            <figure>
                              <img
                                src={DefaultTeacherImage}
                                srcSet={DefaultTeacherImage}
                                loading="lazy"
                                alt="Teacher Profile"
                              />
                            </figure>
                          </AspectRatio>
                          <CardCover
                            className="gradient-cover"
                            sx={{
                              "&:hover, &:focus-within": {
                                opacity: 1,
                              },
                              opacity: 0,
                              transition: "0.1s ease-in",
                              font: "white",
                              color: "white",
                              background:
                                "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                            }}
                          >
                            {/* The first box acts as a container that inherits style from the CardCover */}
                            <div>
                              <Box
                                sx={{
                                  p: 2,
                                  display: "flex",
                                  alignItems: "center",

                                  gap: 1.5,
                                  flexGrow: 1,
                                  alignSelf: "flex-end",
                                }}
                              >
                                <Typography
                                  level="h2"
                                  noWrap
                                  sx={{ color: "white", fontSize: "lg" }}
                                >
                                  {matchingData["Teacher Name"]
                                    ? matchingData["Teacher Name"]
                                    : auth.currentUser.email.split("@")[0]}
                                </Typography>
                              </Box>
                            </div>
                          </CardCover>
                        </Box>
                      </Card>
                      <CardContent>
                        <Typography
                          fontSize="xl"
                          fontWeight="lg"
                        >
                          {matchingData["Teacher Name"]
                            ? matchingData["Teacher Name"]
                            : auth.currentUser.email.split("@")[0]}
                        </Typography>
                        <Typography
                          level="body-sm"
                          fontWeight="lg"
                          textColor="text.tertiary"
                        >
                          Teacher
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
                              {matchingData["Teaching experience"]
                                ? matchingData["Teaching experience"]
                                : "Invlaid MONGO_URI"}
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
                              {/* {teacherData[3].Course.length} */}
                              {matchingData["Course"]
                                ? matchingData["Course"].length
                                : "Invlaid MONGO_URI"}
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
                            onClick={() => setOpen(true)}
                          >
                            Add Course
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  {/* Alernate Card For Teacher */}

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
              <div className="title1-teacherDashboard">
                <DrawTwoToneIcon fontSize="large" />
                <h2>Your Courses</h2>
              </div>
              <div className="course-display-teacherDashboard">
                {console.log(courseData)}
                {courseData.map(
                  (course) =>
                    matchingData.Course.includes(course.CID) && (
                      <div
                        key={course.CID}
                        className="course-display-element-teacherDashboard"
                      >
                        <Card
                          variant="outlined"
                          sx={{ width: 320 }}
                        >
                          <CardOverflow>
                            <AspectRatio ratio="2">
                              <img
                                src={course.image}
                                srcSet={course.image}
                                loading="lazy"
                                alt=""
                              />
                            </AspectRatio>
                          </CardOverflow>
                          <CardContent>
                            <Typography level="title-md">
                              {/* Yosemite National Park */}
                              {course.title}
                            </Typography>
                            <Typography level="body-sm">
                              {/*  */}
                              {course.description}
                            </Typography>
                          </CardContent>
                          <CardOverflow
                            variant="soft"
                            sx={{ bgcolor: "background.level1" }}
                          >
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                              <Typography
                                level="body-xs"
                                fontWeight="md"
                                textColor="text.secondary"
                              >
                                2 views
                              </Typography>
                              <Divider orientation="vertical" />
                              <Typography
                                level="body-xs"
                                fontWeight="md"
                                textColor="text.secondary"
                              >
                                ....
                              </Typography>
                            </CardContent>
                          </CardOverflow>
                        </Card>
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
  }
}

export default TeacherDashboard;
