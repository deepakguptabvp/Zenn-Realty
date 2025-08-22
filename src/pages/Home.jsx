import React from "react";
import HeroSection from "../components/HeroSection";
import AboutZen from "../components/AboutZen";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <FeaturedProjects /> */}
      <AboutZen />
      <WhyChooseUs />   
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
