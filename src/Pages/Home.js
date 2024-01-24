import React, { Fragment } from "react";
import Header from "../Component/Header/Header";
import HeroSection from "../Component/HeroSection/HeroSection";
import AboutUs from "../Component/Aboutus/Aboutus";
import Courses from "../Component/Courses-section/Courses";
import ChooseUs from "../Component/ChooseUs-section/ChooseUs";
import Features from "../Component/Feature-Section/Features";
import FreeCourse from "../Component/Free-Courses_section/FreeCourse";
import Testimonials from "../Component/Testimonial/Testimonials";
import Newsletter from "../Component/Newsletter/Newsletter";
import Footer from "../Component/Footer/Footer";

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
