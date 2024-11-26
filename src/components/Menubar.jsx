import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="md:w-1/2 relative flex items-center justify-center">
      {" "}
      {/* Mobile Menu */}
      <div className="absolute top-0 right-0 justify-end md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 bg-gray-950 bg-opacity-80 text-white p-4 rounded-md shadow-lg transition-all duration-500">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <i className="fas fa-home"></i>
                <Link to="/">HOME</Link>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-utensils"></i>
                <Link to="/menu">MENU</Link>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-store"></i>
                <Link to="/franchising">FRANCHISE</Link>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-info-circle"></i>
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
            <button className="bg-teal-500 text-white py-2 px-6 rounded-md text-lg mt-4">
              Book a Table
            </button>
          </div>
        )}
      </div>
      {/* Desktop Menu */}
      <div
        className="absolute hidden menu-bg md:block text-gray-200 top-12 right-5 px-20 rounded-lg  opacity-80  flex-col items-center py-4 space-y-8"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
        }}
      >
        <Link to="/" className="text-white flex flex-col items-center">
          <i className="fas fa-home text-2xl"></i>
          <span className="text-xs mt-2">HOME</span>
        </Link>
        <Link to="/menu" className="text-white flex flex-col items-center">
          <i className="fas fa-utensils text-2xl"></i>
          <span className="text-xs mt-2">MENU</span>
        </Link>
        <Link
          to="/franchising"
          className="text-white flex flex-col items-center"
        >
          <i className="fas fa-store text-2xl"></i>
          <span className="text-xs mt-2">FRANCHISE</span>
        </Link>
        <Link to="/about" className="text-white flex flex-col items-center">
          <i className="fas fa-info-circle text-2xl"></i>
          <span className="text-xs mt-2">ABOUT</span>
        </Link>
        <Link
          to="/contact"
          className="text-white flex flex-col items-center mt-auto mb-4"
        >
          <i className="fas fa-phone text-2xl"></i>
          <span className="text-xs mt-2">CONTACT US</span>
        </Link>
        <button className="bg-teal-500 text-white text-xs py-2 px-4 rounded-lg justify-center">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
