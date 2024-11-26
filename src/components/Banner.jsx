import React from "react";
import "../index.css";
import menuBannerImage from "../assets/img/menubanner.png";

const Banner = ({ backgroundImage, title }) => {
  return (
    <div
      className="relative banner-height flex justify-center items-start -z-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0 flex items-start justify-center pt-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-white z-10 text-center text-6xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
