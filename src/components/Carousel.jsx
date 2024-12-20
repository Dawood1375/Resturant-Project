import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import MenuBar from "./Menubar";
import "../index.css";
import chickenMealImage from "../assets/img/close-up-delicious-chicken-meal.jpg";
import rightImage from "../assets/img/close-up-delicious-chicken-meal.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Example carousel slides content
  const slides = [
    {
      title: "It's Quick & Amusing!",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      description: "Refined tastes for unforgettable moments.",
      image: chickenMealImage, // Use imported image
    },
    {
      title: "Delight in Every Bite!",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: chickenMealImage, // Use imported image
    },
    {
      title: "Fresh & Delicious!",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: chickenMealImage, // Use imported image
    },
    {
      title: "A Taste of Joy!",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: chickenMealImage, // Use imported image
    },
  ];

  // Handle Next Slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handle Previous Slide
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Toggle Dropdown Menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col sm:flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Left Section - Image with Blur */}
      <div className="md:w-1/2 relative flex items-center justify-center bg-cover bg-center w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 overflow-hidden"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`, // Use imported image URL here
            zIndex: -1,
            transform: "scale(1.1)",
            filter: "blur(10px)", // Apply blur effect
          }}
        ></div>
        <div className="relative text-center text-white p-4 md:p-8">
          {/* Dynamic Carousel Content */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic mb-4">
            {slides[currentSlide].title}
          </h2>
          <h1 className="federo-regular text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {slides[currentSlide].subtitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="bg-teal-500 shadow-2xl text-white py-2 px-6 rounded-md text-lg">
            See Menu
          </button>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="absolute bottom-6 right-6 flex space-x-4">
          <button
            onClick={handlePrevSlide}
            className="text-white px-2 rounded-full"
            style={{ backgroundColor: "#174f49" }}
          >
            <i className="fas fa-chevron-left "></i>
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-emeraldGreen text-white px-2 rounded-full hover:bg-emeraldHover"
            style={{ backgroundColor: "#174f49" }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-6 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-teal-500"
                  : "bg-[rgba(0,_0,_0,_0.6)] border border-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
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
      </div>

      {/* Right Section - Menu and Image (Hidden on Small Screens) */}
      <div className="md:w-1/2 relative w-full h-full hidden md:block">
        <img
          src={rightImage}
          alt="Delicious grilled chicken with garnish"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute carousel-menu menu-links top-1/2 right-5 transform -translate-y-1/2 text-gray-200 py-4 px-6 rounded-md shadow-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
          }}
        >
          <ul className="space-y-6 md:space-y-8 lg:space-y-10 text-center links-index">
            <li className="flex flex-col items-center space-y-2">
              <i className="fas fa-home text-lg sm:text-xl lg:text-2xl text-white"></i>
              <Link
                to="/"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400"
              >
                HOME
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <i className="fas fa-utensils text-lg sm:text-xl lg:text-2xl text-white"></i>
              <Link
                to="/menu"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400"
              >
                MENU
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <i className="fas fa-store text-lg sm:text-xl lg:text-2xl text-white"></i>
              <Link
                to="/franchising"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400"
              >
                FRANCHISE
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <i className="fas fa-info-circle text-lg sm:text-xl lg:text-2xl text-white"></i>
              <Link
                to="/about"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400"
              >
                ABOUT
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-2">
              <i className="fas fa-envelope text-lg sm:text-xl lg:text-2xl text-white"></i>
              <Link
                to="/contact"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white hover:text-teal-400"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          <button className="bg-teal-500 text-white py-2 px-2 rounded-md text-sm sm:text-base md:text-lg mt-6 hover:bg-teal-600 transition">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
