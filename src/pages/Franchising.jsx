import React from "react";
import Banner from "../components/Banner";
import MenuBar from "../components/Menubar";
import ImageCarousel from "../components/ImageCarousel";
import "../index.css";

// Import images
import franchisingBanner from "../assets/img/frame4.png"; // Importing the banner image

const Franchising = () => {
  return (
    <>
      <MenuBar />
      {/* Use the imported banner image */}
      <Banner backgroundImage={franchisingBanner} title="OUR BRANCHES" />
      <ImageCarousel />
      <h1 className="text-3xl m-auto text-center mt-8">
        We Are Now in Bristol
      </h1>
      <div
        className="flex flex-col md:flex-row p-8"
        style={{
          width: "80vw",
          marginLeft: "10%",
        }}
      >
        <div className="flex-1 mb-8 md:mb-0 flex md:justify-start">
          <div className="md:text-left">
            <h1 className="text-2xl text-gray-800">Pouros and Sons</h1>
            <p className="mt-2">
              646 First Street, Quigleyville 36427
              <br />
              country
            </p>
            <div className="flex mt-2 md:justify-start">
              <div className="flex text-red-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="ml-2">768-123 Reviews</p>
            </div>
            <p className="mt-2">0321-1234-123</p>
          </div>
        </div>

        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21955.1686458584!2d-87.1083387527243!3d31.10864233659413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890459020f3612f%3A0x940b80e2cfa0391b!2sBrewton%2C%20AL%2036427%2C%20USA!5e1!3m2!1sen!2s!4v1732196542423!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Franchising;
