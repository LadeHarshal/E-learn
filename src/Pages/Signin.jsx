import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
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

  return (
    <div
      className="signin-container"
      style={styles.signinContainer}
    >
      <div
        className="signin-content"
        style={styles.signinContent}
      >
        <h2
          className="signin-header"
          style={styles.signinHeader}
        >
          Sign In
        </h2>
        <div
          className="signin-form"
          style={styles.signinForm}
        >
          <div
            className="signin-image"
            style={styles.signinImage}
          >
            <img
              src=""
              alt="Signin"
            />
          </div>
          <div
            className="signin-inputs"
            style={styles.signinInputs}
          >
            <label
              className="signin-inputs-label"
              style={styles.signinInputLabel}
            >
              Enter Your Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="signin-input"
              style={styles.signinInput}
              placeholder="Enter Your Email Here"
            />
            <label
              className="signin-inputs-label"
              style={styles.signinInputLabel}
            >
              Enter Your Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="signin-input"
              style={styles.signinInput}
              placeholder="Enter Your Password Here"
            />
            <button
              onClick={signinUser}
              className="signin-button"
              style={styles.signinButton}
            >
              Sign In
            </button>
          </div>
        </div>
        <div
          className="login-link"
          style={styles.loginLink}
        >
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default SigninPage;

const styles = {
  signinContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    backgroundColor: "#f9f9f9",
  },
  signinContent: {
    maxWidth: "750px",
    width: "100%",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  signinInputLabel: {
    marginLeft: "-0.1px",
    fontWeight: "700",
    fontSize: "17px",
  },
  signinHeader: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "40px",
  },
  signinForm: {
    display: "flex",
  },
  signinImage: {
    maxWidth: "100%",
    height: "auto",
    marginRight: "20px",
  },
  signinInputs: {
    flex: 1,
    marginTop: "80px",
  },
  signinInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
    width: "300px",
    marginLeft: "-1px",
  },
  signinButton: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  loginLink: {
    textAlign: "center",
    marginTop: "1px",
  },
};
