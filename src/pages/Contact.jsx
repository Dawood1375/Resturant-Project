import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";

// Import images
import contactBanner from "../assets/img/frame4.png"; // Import the contact banner image

const Contact = () => {
  return (
    <>
      <MenuBar />
      {/* Use the imported banner image */}
      <Banner backgroundImage={contactBanner} title="CONTACT US" />
    </>
  );
};

export default Contact;
