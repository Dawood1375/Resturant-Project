import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";

// Import image
import aboutBannerImage from "../assets/img/top-view-delicious-pasta-arrangement.jpg";

const About = () => {
  return (
    <>
      <MenuBar />
      <Banner backgroundImage={aboutBannerImage} title="ABOUT US" />
      <AboutUs />
    </>
  );
};

export default About;
