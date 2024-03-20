import React, { useState } from "react";
import "./login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import registerImg from "../assets/images/register.jpg";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [username, setUsername] = useState();
  const [useremail, setUserEmail] = useState();
  const [userrole, setUserRole] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = "";
    if (userrole === "teacher") {
      apiUrl = "http://localhost:8080/register/teacher";
    } else {
      apiUrl = "http://localhost:8080/register/student";
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email: useremail,
          role: userrole,
          password,
        }),
      });

      if (response.ok) {
        console.log("User created successfully");
        // Optionally, you can redirect to another page or show a success message to the user
      } else {
        console.error("Failed to create user");
        // Optionally, handle the error case
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col
            lg="8"
            className=" m-auto"
          >
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img
                  src={registerImg}
                  alt=""
                ></img>
              </div>

              <div className="login__form">
                <div className="user">
                  <img
                    src={userIcon}
                    alt=""
                  ></img>
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    ></input>
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Role-(Teacher/Student"
                      required
                      id="Role"
                      onChange={(e) => setUserRole(e.target.value)}
                    ></input>
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Register;
