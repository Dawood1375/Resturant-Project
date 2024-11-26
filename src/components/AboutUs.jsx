import React from "react";
import "../index.css";

// Importing images
import pastaImage from "../assets/img/top-view-delicious-pasta-arrangement.jpg";
import foodPlateImage from "../assets/img/unsplash_mAQZ3X_8_l0.png";
import sandwichImage from "../assets/img/unsplash_jpkfc5_d-DI@2x.png";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-row p-6 lg:p-8">
        {/* Right Section - Image for small screens */}
        <div className="sm:w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 sm:block md:hidden">
          <img
            src={pastaImage}
            alt="A delicious dish with eggs and greens"
            className="rounded-lg w-full object-cover"
            width="500"
            height="600"
          />
        </div>

        <div className="md:w-1/2 space-y-8">
          {/* Increased space-y from 4 to 8 */}
          <h2 className="federo-regular text-3xl sm:text-4xl md:text-5xl">
            About us
          </h2>
          <h1 className="federo-regular text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            We Create the best <br /> foody products
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <ul className="mt-6 space-y-4 text-base sm:text-lg md:text-xl">
            {/* Increased space-y from 2 to 4 */}
            <li className="flex items-center">
              <span className="mr-2"> ✔</span> Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="mr-2"> ✔</span> Quisque diam pellentesque
              bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="mr-2"> ✔</span> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-lg text-base sm:text-lg md:text-xl">
            {/* Increased top margin */}
            Read More
          </button>
        </div>

        {/* Right Section - Images for medium and large screens */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pastaImage}
              alt="A delicious dish with eggs and greens"
              className="rounded-lg"
              width="500"
              height="600"
            />
            <img
              src={foodPlateImage}
              alt="A plate of assorted food items"
              className="rounded-lg"
              width="500"
              height="600"
            />
            <img
              src={sandwichImage}
              alt="A sandwich with vegetables"
              className="rounded-lg col-span-2"
              width="500"
              height="600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
