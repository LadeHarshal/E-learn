import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import "./ClientDashboard.css";
import logo from "../../assets/images/Logo_DiamondBkg.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ClientDashboard() {
  // For switching Tabs between users and courses
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // For Submitting Form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.username, formData.password);
  };

  // For the Table to display data
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, Role, date_created, email, Action) {
    return { name, Role, date_created, email, Action };
  }

  const coursesData = [
    createData("Math", "Science", "3/2/2024", "math@gmail.com", "View"),
    createData("Physics", "Science", "3/2/2024", "physics@gmail.com", "View"),
    createData("English", "Language", "3/2/2024", "english@gmail.com", "View"),
  ];

  const usersData = [
    createData("Amit", "admin", "3/2/2024", "Amit@gmail.com", "Delete"),
    createData("Bablu", "admin", "3/2/2024", "Bablu@gmail.com", "Delete"),
    createData("Chinmay", "student", "3/2/2024", "Chinmay@gmail.com", "Delete"),
    createData("Dharam", "student", "3/2/2024", "Dharam@gmail.com", "Delete"),
    createData("Esha", "admin", "3/2/2024", "Esha@gmail.com", "Delete"),
  ];

  const dataToShow = value === 0 ? coursesData : usersData;

  return (
    <div className="dashboard">
      {/* TopBar */}

      {/* Sidebar left  Start */}
      {/* Photo  */}
      {/* Client Details */}
      {/* Sidebar left  End*/}

      {/* Tabs Switcher pane with options for "Courses" and "user" */}

      {/* Table according to above tab */}

      <div className="side">
        <div className="img-container">
          <img
            src={logo}
            alt="company-logo"
          />
        </div>
        <div className="input-box">
          <form>
            <label>
              <h4>Username</h4>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="un"
              />
            </label>
            <label>
              <h4>Password</h4>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="ps"
              />
            </label>
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              className="submit"
            />
          </form>
        </div>
      </div>
      <div className="right">
        <div className="table">
          <div className="tabs">
            <Tabs
              value={value}
              onChange={handleChangeTab}
              aria-label="icon label tabs example"
            >
              <Tab
                icon={<LibraryBooksIcon />}
                label="Courses"
              />
              <Tab
                icon={<PersonPinIcon />}
                label="USERS"
              />
            </Tabs>
          </div>
          <div className="contents">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 700 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Role</StyledTableCell>
                    <StyledTableCell align="center">
                      Date Created
                    </StyledTableCell>

                    {value === 1 && (
                      <StyledTableCell align="center">Email</StyledTableCell>
                    )}
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataToShow.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.Role}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.date_created}
                      </StyledTableCell>
                      {value === 1 && (
                        <StyledTableCell align="center">
                          {row.email}
                        </StyledTableCell>
                      )}
                      <StyledTableCell align="center">
                        {/* {row.Action} */}
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                        >
                          <Button
                            variant="contained"
                            color="success"
                          >
                            {value === 1 ? "Edit" : "View"}
                          </Button>
                          <Button
                            variant="outlined"
                            color="error"
                          >
                            Delete
                          </Button>
                        </Stack>

                        <div className="action-button"></div>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
