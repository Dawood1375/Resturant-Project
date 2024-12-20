import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import "../index.css";

// Import images
import dessertImage1 from "../assets/img/unsplash_-lHZUkiWM74.png";
import fastFoodImage from "../assets/img/unsplash_dphM2U1xq0U.png";
import dessertImage2 from "../assets/img/unsplash_MRHyv-hHxgk.png";
import dessertImage3 from "../assets/img/unsplash_q54Oxq44MZs.png";

const FoodCategory = () => {
  const foodItems = [
    {
      id: 1,
      category: "Dessert",
      image: dessertImage1,
    },
    {
      id: 2,
      category: "Fast Food",
      image: fastFoodImage,
    },
    {
      id: 3,
      category: "Dessert",
      image: dessertImage2,
    },
    {
      id: 4,
      category: "Dessert",
      image: dessertImage3,
    },
  ];

  return (
    <>
      <div className="container mx-auto text-center py-10 mt-16">
        <h1 className="federo-regular text-gray-900 text-4xl mb-10">
          Food Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <div key={item.id} className="relative">
              <img
                src={item.image}
                alt={`${item.category} Image`}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <button className="bg-teal-500 shadow-xl text-white px-4 py-3 rounded-lg text-sm sm:px-8 sm:py-4 sm:text-lg">
                  {item.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
