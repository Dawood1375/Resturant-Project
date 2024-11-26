import React, { useState, useRef } from "react";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const slidesRef = useRef(null);

  const slides = [
    "../src/assets/img/frame4.png",
    "../src/assets/img/frame4.png",
    "../src/assets/img/frame4.png",
    "../src/assets/img/frame4.png",
  ];

  const totalSlides = slides.length;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  const handleDragStart = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    setScrollLeft(slidesRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragMove = (e) => {
    if (!dragging) return;
    const x = e.clientX;
    const walk = (x - startX) * 3; // Drag speed
    slidesRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl mt-8">Introducing New Look</h1>

      <div
        className="mt-8 relative"
        style={{
          width: "80vw",
        }}
        ref={slidesRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="overflow-hidden w-full rounded-md shadow-md">
          <div
            className="flex transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto flex-shrink-0" // Ensure each image takes full width of the carousel
              />
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute ml-2 bottom-6  flex space-x-2">
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

        {/* Carousel Buttons */}
        <div className="absolute bottom-6 right-6 flex space-x-4">
          <button
            onClick={handlePrevSlide}
            className="text-white px-2 rounded-full"
            style={{ backgroundColor: "#174f49" }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-emeraldGreen text-white px-2 rounded-full hover:bg-emeraldHover"
            style={{ backgroundColor: "#174f49" }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
