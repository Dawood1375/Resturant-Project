import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductData() {
  const images = [
    "../src/assets/img/close-up-delicious-chicken-meal.jpg",
    "../src/assets/img/close-up-delicious-chicken-meal.jpg",
    "../src/assets/img/close-up-delicious-chicken-meal.jpg",
    "../src/assets/img/close-up-delicious-chicken-meal.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  // Fetch initial cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = () => {
    const product = {
      name: "Product Name",
      category: "Pizza",
      price: 54.0,
      quantity: quantity,
      image: mainImage,
    };

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, product];
    });

    // Show toast notification
    toast.success("Item has been added to the cart!");
  };

  // Synchronize cart with localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increment") {
        return prev + 1;
      } else if (type === "decrement" && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Side Thumbnails */}
      <div className="flex flex-col items-center p-4">
        <div className="flex sm:flex-row lg:flex-col items-center w-full sm:w-60 md:w-80 lg:w-96 px-4 mb-4 lg:mb-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-2 lg:mb-4 px-1 cursor-pointer"
              onClick={() => setMainImage(image)}
            >
              <img
                className={`border-2 transition-all duration-300 ease-in-out ${
                  mainImage === image
                    ? "border-teal-500 focus:ring-2 focus:ring-teal-500"
                    : "border-transparent"
                }`}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                tabIndex={0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="flex flex-col lg:flex-row p-4 lg:p-8">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0">
          <img src={mainImage} alt="Main product" className="w-full" />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/5 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-4">
            Product Name
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4">
            Category: Pizza
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, at ac dapibus sit eu velit in
            consequat.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4">$54.00</p>
          <div className="flex items-center mb-4">
            <div className="text-red-500 text-xs sm:text-sm lg:text-base">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600">
              5.0 Rating | 22 Reviews
            </p>
          </div>
          <div className="mb-4">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-2">
              Quantity
            </p>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="border rounded-sm border-gray-900 px-4 sm:px-5 py-2"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-10 sm:w-12 text-center border-t border-b border-gray-400"
                readOnly
              />
              <button
                onClick={() => handleQuantityChange("increment")}
                className="border rounded-sm border-gray-900 px-4 sm:px-5 py-2"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <button
              onClick={addToCart}
              className="bg-teal-500 text-white  rounded-lg shadow-xl px-4 sm:px-6 py-2  mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto"
            >
              Add to Cart
            </button>
            <Link to="/cart" className="w-full sm:w-auto">
              <button className="bg-gray-500 rounded-lg shadow-xl text-white ml-1 px-4 sm:px-6 py-2  mb-2 sm:mb-0 w-full sm:w-auto">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductData;
