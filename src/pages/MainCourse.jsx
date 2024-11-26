import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import MenuLinks from "../components/MenuLinks";
function MainCourse() {
  return (
    <>
      <MenuBar />
      <Banner backgroundImage="../src/assets/img/menubanner.png" title="Menu" />
      <MenuLinks />
    </>
  );
}

export default MainCourse;
