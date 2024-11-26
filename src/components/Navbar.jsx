import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-col">
      {/* Navbar Container */}
      <div className="nav-bg flex items-center justify-between px-6 md:px-12 lg:px-16 h-20">
        {/* Left: Language Selector */}
        <div className="hidden md:block lg:block text-sm">
          <select className="text-white lan-sel border-none focus:outline-none">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        {/* Center: Logo */}
        <div className="flex">
          <div className="federo-regular text-3xl font-bold tracking-wide text-white">
            <Link to="/">LOGO</Link>
          </div>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <img
              alt="Instagram"
              src="../src/assets/img/insta.png"
              style={{
                height: "20px",
              }}
            />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <img
              alt="Facebook"
              src="../src/assets/img/fb_icon.png"
              style={{
                height: "20px",
              }}
            />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition "
          >
            <img
              alt="Twitter"
              src="../src/assets/img/twitter.png"
              style={{
                height: "20px",
              }}
            />
          </a>
        </div>
      </div>

      {/* Gray Line Below Navbar */}
      <div className="border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Navbar;
