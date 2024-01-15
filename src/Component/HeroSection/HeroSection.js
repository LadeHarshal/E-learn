import React from 'react';
import {Container , Row , Col , Button} from 'reactstrap';
import heroImg from '../../assets/images/Group 43.png'
import './heroscetion.css';

const HeroSection = () => {
  return (
  <section>
    <Container>
      <Row>
        <Col lg='6' md='6' >
         <div className='hero__content'>
         <h2 className='mb-4'>
          Let The Journey<br/>For a better<br/>Learning<br/>begin now
          </h2>
          <p>Click the below button to start registration.</p>
         </div>
         <div className='hero__button align-items-center gap-5'>
                  <Button>Get Started</Button>
                </div>
        </Col>

        <Col lg='6' md='6' > 
        <img src={heroImg} alt='' className='w-100'></img></Col>
      </Row>
    </Container>
  </section>
  )
}

export default HeroSection
