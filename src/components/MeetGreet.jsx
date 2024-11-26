import React from "react";
import "../index.css";

// Import images
import outdoorSeatingImage from "../assets/img/pic.png";
import indoorMeetingImage from "../assets/img/Picture → 14-1-600x400.jpg.webp.png";

const MeetGreet = () => {
  return (
    <>
      <div className="w-screen mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start h-full">
            <img
              src={outdoorSeatingImage}
              alt="Outdoor restaurant seating with tables and chairs"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-start h-full p-4">
            <h1 className="text-4xl federo-regular mb-4">Our Restaurant</h1>
            <p className="text-gray-700 mb-6">
              Eleifend facilisis sed facilisis varius hendrerit accumsan tortor.
              Donec nisi est mattis mauris morbi orci maecenas duis. Eleifend
              facilisis sed facilisis varius hendrerit accumsan tortor. Donec
              nisi est mattis mauris morbi orci maecenas duis. Eleifend
              facilisis sed facilisis varius hendrerit accumsan tortor. Donec
              nisi est mattis mauris morbi orci maecenas duis. Eleifend
              facilisis sed facilisis varius hendrerit accumsan tortor. Donec
              nisi est mattis mauris morbi orci maecenas duis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col justify-start h-full p-4">
            <h2 className="text-4xl federo-regular mb-4">Meet & Greet</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur. Sed amet nibh ante
              ultrices adipiscing euismod enim diam imperdiet. Tellus justo
              proin sed orci et turpis diam libero. Eleifend facilisis sed
              facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
              mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis
              varius hendrerit accumsan tortor. Donec nisi est mattis mauris
              morbi orci maecenas duis. Eleifend facilisis sed facilisis varius
              hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
              maecenas duis.
            </p>
          </div>
          <div className="flex flex-col justify-start h-full">
            <img
              src={indoorMeetingImage}
              alt="Indoor meeting room with a long table and chairs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetGreet;
