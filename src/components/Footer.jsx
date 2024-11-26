import React from "react";
import "../index.css";

// Import images
import friesImage from "../assets/img/unsplash_PxJ9zkM2wdA.png";
import burgerImage from "../assets/img/unsplash__79ZJS8pV70.png";
import pizzaImage from "../assets/img/unsplash_W10_NCsLVyc.png";
import barbecueImage from "../assets/img/unsplash_MRHyv-hHxgk.png";
import dishImage from "../assets/img/unsplash_-lHZUkiWM74.png";
import saladImage from "../assets/img/unsplash_jpkfc5_d-DI@2x.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 pt-10">
        <div className="container mx-auto py-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="px-4">
            <h2 className="text-xl federo-regular text-gray-900">LOGO</h2>
            <p className="mt-2" style={{ color: "#7f9290" }}>
              Lorem ipsum dolor sit amet
            </p>
            <div className="mt-4 flex rounded-lg">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 rounded-l-lg w-full bg-transparent federo-regular"
              />
              <button className="bg-teal-500 text-white p-2 rounded-r-lg">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="px-4">
            <h2 className="text-xl federo-regular">Contact us</h2>
            <ul className="mt-2 space-y-2" style={{ color: "#7f9290" }}>
              <li>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "black" }}
                ></i>{" "}
                25950 Long Lane, North Ismael 14280
              </li>
              <li>
                <i className="fas fa-phone" style={{ color: "black" }}></i>{" "}
                00965 - 96659986
              </li>
              <li>
                <i className="fas fa-envelope" style={{ color: "black" }}></i>{" "}
                Jermaine.Connelly@yahoo.com
              </li>
              <li>
                <i className="fas fa-clock" style={{ color: "black" }}></i> Sun
                - Sat / 10:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-xl federo-regular text-gray-900">Links</h2>
            <ul className="mt-2 space-y-2" style={{ color: "#7f9290" }}>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Our Menu</li>
              <li>Team</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="mb-10">
            <h2 className="text-xl federo-regular text-gray-900">Gallery</h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img
                src={friesImage}
                alt="Image of fries"
                className="w-full h-full object-cover"
              />
              <img
                src={burgerImage}
                alt="Image of a burger"
                className="w-full h-full object-cover"
              />
              <img
                src={pizzaImage}
                alt="Image of a pizza"
                className="w-full h-full object-cover"
              />
              <img
                src={barbecueImage}
                alt="Image of a barbecue"
                className="w-full h-full object-cover"
              />
              <img
                src={dishImage}
                alt="Image of a dish"
                className="w-full h-full object-cover"
              />
              <img
                src={saladImage}
                alt="Image of a salad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-teal-500 federo-regular flex flex-col text-white text-center py-4">
          <p>Copyright © 2000-2020 logo.com. All rights reserved</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Term of Use
            </a>
            <a href="#" className="hover:underline">
              Partner
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
