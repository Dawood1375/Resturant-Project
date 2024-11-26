import React from "react";
import "../index.css";
const OurService = () => {
  return (
    <>
      <div className="text-center py-24 bg-teal-100">
        <h1 className="text-3xl pb-10 font-semibold mb-12 text-gray-900 federo-regular md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center">
            <i
              className="fas fa-concierge-bell text-6xl mb-4"
              style={{ color: "#7f9290" }}
            ></i>
            <h2 className="text-xl federo-regular text-gray-900 font-semibold mb-2">
              Concierge Service
            </h2>
            <p
              className="text-gray-700 px-4 md:px-0"
              style={{ color: "#7f9290" }}
            >
              Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est.
              Odio euismod sed amet libero. Scelerisque sed enim.
            </p>
          </div>
          <div className="text-center">
            <i
              className="fas fa-utensils  text-6xl mb-4"
              style={{ color: "#7f9290" }}
            ></i>
            <h2 className="text-xl federo-regular text-gray-900  font-semibold mb-2">
              Dining
            </h2>
            <p
              className="text-gray-700 px-4 md:px-0"
              style={{ color: "#7f9290" }}
            >
              Lorem ipsum dolor sit amet consectetur. Felis quam ut elementum
              non a consectetur. Vel ornare purus pretium ut.
            </p>
          </div>
          <div className="text-center">
            <i
              className="fas fa-calendar-alt text-6xl mb-4"
              style={{ color: "#7f9290" }}
            ></i>
            <h2 className="text-xl federo-regular text-gray-900 font-semibold mb-2">
              Restaurant
            </h2>
            <p
              className="text-gray-700 px-4 md:px-0"
              style={{ color: "#7f9290" }}
            >
              Lorem ipsum dolor sit amet consectetur. Consequat pretium
              pellentesque venenatis odio cras posuere leo nulla etiam. Massa
              enim arcu mi tristique enim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
