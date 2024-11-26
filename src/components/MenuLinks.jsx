import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function MenuLinks() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="relative z-[50] flex items-center px-4 justify-center flex-col md:flex-row py-5 mt-10 font-medium">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-5 text-gray-700">
        <NavLink
          to="/menu"
          className={`flex federo-regular flex-col items-center gap-2 p-4 transition-all ${
            activeLink === "starter"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
          onClick={() => handleClick("starter")}
        >
          <p className="federo-regular text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            STARTER
          </p>
        </NavLink>
        <NavLink
          to="/mainCourse"
          className={`flex federo-regular flex-col items-center gap-2 p-4 transition-all ${
            activeLink === "main"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
          onClick={() => handleClick("main")}
        >
          <p className="federo-regular text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            MAIN COURSE
          </p>
        </NavLink>
        <NavLink
          to="/dessert"
          className={`flex federo-regular flex-col items-center gap-2 p-4 transition-all ${
            activeLink === "dessert"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
          onClick={() => handleClick("dessert")}
        >
          <p className="federo-regular text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            DESSERT
          </p>
        </NavLink>
        <NavLink
          to="/drinks"
          className={`flex flex-col items-center gap-2 p-4 transition-all ${
            activeLink === "drinks"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
          onClick={() => handleClick("drinks")}
        >
          <p className="federo-regular text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            DRINKS
          </p>
        </NavLink>
      </ul>
    </div>
  );
}

export default MenuLinks;
