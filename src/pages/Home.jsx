import React from "react";
import MenuBar from "../components/Menubar";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import FoodCategory from "../components/FoodCategory";
import Jumbertron from "../components/Jumbertron";
import Team from "../components/Team";
import MeetGreet from "../components/MeetGreet";
import OurService from "../components/OurService";
import Menubar from "../components/Menubar";

const Home = () => {
  return (
    <>
      <Carousel />
      <br />
      <AboutUs />
      <br />
      <FoodCategory />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Jumbertron />
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
      <MeetGreet />
      <br />
      <br />
      <br />
      <OurService />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
