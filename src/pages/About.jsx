import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <MenuBar />
      <Banner
        backgroundImage="../src/assets/img/top-view-delicious-pasta-arrangement.jpg"
        title="ABOUT US"
      />
      <AboutUs />
    </>
  );
};

export default About;
