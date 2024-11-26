import React from "react";
import "../index.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import backgroundImage from "../assets/img/pic.png"; // Import the image properly

const Jumbotron = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply mt-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "60vh", // Adjust the height
        backgroundAttachment: "fixed", // Fix the background image during scroll
      }}
    >
      <div className="flex items-center justify-center h-full px-4 mx-auto max-w-screen-xl text-center py-16">
        <div>
          <h1 className="federo-regular mb-4 text-4xl  tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Book Early & Save
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            fuga!
          </p>
          <div className="flex flex-col space-y-4  sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="/booking" className="inline-block">
              <button
                type="button"
                className="py-3 px-6 text-base font-medium text-white rounded-lg bg-teal-500 hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 transition-all duration-300 w-full sm:w-auto"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
