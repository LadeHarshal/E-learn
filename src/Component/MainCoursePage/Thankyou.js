import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './thankyou.css';

const ThankYou = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='pt-5 text-center'>
                        <div className='thank__you'>
                            <span>
                                <i className="ri-checkbox-circle-line"></i>
                            </span>
                            
                            <h1 className='mb-3 fw-semibold'>Thank You</h1>
                            <h3 className='mb-4'>Your course is booked.</h3>
                            
                            <Link to='/coursemain'><Button className='btn primary__btn mr-2 '>Go to Course</Button></Link>
                            <Link to='/home'><Button className='btn primary__btn'>Back to Home</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ThankYou;
