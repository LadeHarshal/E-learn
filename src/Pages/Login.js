import React, {useState} from "react";
import './login.css';
import { Container, Row, Col, Form, FormGroup , Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import loginImg from '../assets/images/login.jpg';
import userIcon from '../assets/images/user.png';


const Login = () => {

    
    const [credentials, setCredentials] = useState({
       email: undefined,
       password: undefined
      });

    const handleChange = e =>{
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
      };

      const handleClick = e=>{
        e.preventdefault();
      }

    return(
          <section>
            <Container>
                <Row>
                    <Col lg='8' className=" m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt=""></img>
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt=""></img>
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange}></input>
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange}></input>
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn" type="submit">Login</Button>
                                </Form>
                                <p>Dont't have an account? <Link to='/register'>Register</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
          </section>
     
    )
    
};
export default Login;