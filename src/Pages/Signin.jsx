import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

// For failed login
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import CircularProgress from "@mui/joy/CircularProgress";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Typography from "@mui/joy/Typography";

import Warning from "@mui/icons-material/Warning";
const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signin Success");
        if (user && user.email) {
          // Redirect to the new page and pass user email
          if (user.email.split("@")[1].split(".")[0] === "org") {
            navigate("/TeacherDashboard", { state: { email: user.email } });
          } else {
            navigate("/Student", { state: { email: user.email } });
          }
        } else {
          console.log("User data is null or missing email");
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
      });
  };
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="Signin-page"
      style={styles.container}
    >
      <Modal
        open={showAlert}
        onClose={() => setShowAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ ...styles.modalContainer, ...styles.modal }}></Box>
      </Modal>
      <Modal
        open={showAlert}
        onClose={() => setShowAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ModalDialog layout="center">
          <Alert
            variant="soft"
            color="danger"
            invertedColors
            startDecorator={
              <CircularProgress
                size="lg"
                color="danger"
              >
                <Warning />
              </CircularProgress>
            }
            sx={{ alignItems: "flex-start", gap: "1rem" }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography level="title-md">Invalid Credentials</Typography>
              <Typography level="body-md">
                Please verify your credentials and try again.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Button
                  variant="solid"
                  size="sm"
                  onClick={() => setShowAlert(false)} // Close the alert on button click
                >
                  Try again
                </Button>
              </Box>
            </Box>
          </Alert>
        </ModalDialog>
      </Modal>
      <h2>Sign In</h2>
      <label style={styles.label}>Enter Your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        style={styles.input}
        placeholder="Enter Your Email Here"
      />
      <label style={styles.label}>Enter Your Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        style={styles.input}
        placeholder="Enter Your Password Here"
      />
      <button
        onClick={signinUser}
        style={styles.button}
      >
        Sign In
      </button>
    </div>
  );
  return (
    <div
      className="Signin-page"
      style={styles.container}
    >
      <Modal
        open={showAlert}
        onClose={() => setShowAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ ...styles.modalContainer, ...styles.modal }}></Box>
      </Modal>
      <Modal
        open={showAlert}
        onClose={() => setShowAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ModalDialog layout="center">
          <Alert
            variant="soft"
            color="danger"
            invertedColors
            startDecorator={
              <CircularProgress
                size="lg"
                color="danger"
              >
                <Warning />
              </CircularProgress>
            }
            sx={{ alignItems: "flex-start", gap: "1rem" }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography level="title-md">Invalid Credentials</Typography>
              <Typography level="body-md">
                Please verify your credentials and try again.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Button
                  variant="solid"
                  size="sm"
                  onClick={() => setShowAlert(false)} // Close the alert on button click
                >
                  Try again
                </Button>
              </Box>
            </Box>
          </Alert>
        </ModalDialog>
      </Modal>
      <h2>Sign In</h2>
      <label style={styles.label}>Enter Your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        style={styles.input}
        placeholder="Enter Your Email Here"
      />
      <label style={styles.label}>Enter Your Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        style={styles.input}
        placeholder="Enter Your Password Here"
      />
      <button
        onClick={signinUser}
        style={styles.button}
      >
        Sign In
      </button>
    </div>
  );
};

export default SigninPage;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "0 auto",
  },
  label: {
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "300px",
    margin: "0 auto",
  },
  label: {
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};
