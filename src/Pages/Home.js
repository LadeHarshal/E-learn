import React, { Fragment } from "react";
import HeroSection from "../Component/HeroSection/HeroSection";
import AboutUs from "../Component/Aboutus/Aboutus";
import Courses from "../Component/Our_popular_courses/Courses";
import ChooseUs from "../Component/ChooseUs-section/ChooseUs";
import Features from "../Component/Feature-Section/Features";
import FreeCourse from "../Component/Free-Courses_section/FreeCourse";
import Testimonials from "../Component/Testimonial/Testimonials";
import Newsletter from "../Component/Newsletter/Newsletter";


const Home = () => {
  return (
    <div>
        <Fragment>
        
        
        <HeroSection/>
        <AboutUs/>
        <Courses />
        <ChooseUs/>
        <Features/>
        <FreeCourse/>
        <Testimonials/>
        <Newsletter/>
      

        </Fragment>
   </div>
  )
}

export default Home;
