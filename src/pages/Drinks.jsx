import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import MenuLinks from "../components/MenuLinks";

export default function Drinks() {
  return (
    <>
      <MenuBar />
      <Banner backgroundImage="../src/assets/img/menubanner.png" title="Menu" />
      <MenuLinks />
    </>
  );
}
