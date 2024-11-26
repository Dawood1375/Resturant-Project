import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import MenuLinks from "../components/MenuLinks";
import Product from "../components/Product";
import Jumbotron from "../components/Jumbertron";
import { Link } from "react-router-dom";
import "../index.css";
const Menu = () => {
  return (
    <>
      <MenuBar />
      <Banner backgroundImage="../src/assets/img/menubanner.png" title="MENU" />
      <MenuLinks />
      <div className="mb-4 ml-4" style={{ width: "200px", marginLeft: "13%" }}>
        <label className="block text-sm font-medium text-gray-700">
          Filter By Price
        </label>
        <div className="flex flex-col mt-2">
          <input
            type="range"
            min="0"
            max="8000"
            className="bg-gray-700 appearance-none h-1 rounded-lg cursor-pointer"
            style={{
              accentColor: "transparent",
              WebkitAppearance: "none", // For Safari
              MozAppearance: "none", // For Firefox
              background: "linear-gradient(to right, #4a4a4a, #4a4a4a 100%)", // Gray track
            }}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>From $0 to $8000</span>
            <span className="text-gray-500 cursor-pointer">Filter</span>
          </div>
        </div>
      </div>
      <Link to="/productdetails">
        <Product />
      </Link>
      <br />
      <Jumbotron /> <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Menu;
