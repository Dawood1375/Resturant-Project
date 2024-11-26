import React from "react";
import "../index.css";

const Team = () => {
  function ChefCard() {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto">
        <img
          className="w-full"
          src="../src/assets/img/Rectangle 8863.png"
          alt="Chef D.Estwood standing in a kitchen, smiling and wearing a white chef's uniform"
        />
        <div className="px-6 py-4">
          <div className="federo-regular text-xl mb-2">D.Estwood</div>
          <p className="text-gray-700 text-base">Chief Chef</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <h1 className="federo-regular text-gray-900 text-4xl  mb-8">
          Meet Our Chef
        </h1>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <ChefCard />
          <ChefCard />
          <ChefCard />
          <ChefCard />
        </div>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-teal-600">
          Read More
        </button>
      </div>
    </>
  );
};

export default Team;
