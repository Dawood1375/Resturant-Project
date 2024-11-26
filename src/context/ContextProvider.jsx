import React, { useState } from "react";
import { ProductContext } from "./context";

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tasty Tacos",
      ingredients: ["Beef", "Cheese", "Lettuce", "Tomatoes"],
      price: 20.0,
      imagePath: "../assets/img/close-up-delicious-taco-plate.jpg",
    },
    {
      id: 2,
      name: "Crispy Chicken",
      ingredients: ["Chicken", "Spices", "Lettuce", "Mayo"],
      price: 15.0,
      imagePath: "../assets/img/close-up-delicious-taco-plate.jpg",
    },
    {
      id: 3,
      name: "Spicy Veggie Tacos",
      ingredients: ["Beans", "Corn", "Lettuce", "Salsa"],
      price: 12.0,
      imagePath: "../assets/img/close-up-delicious-taco-plate.jpg",
    },
    {
      id: 4,
      name: "Classic Burrito",
      ingredients: ["Rice", "Beans", "Cheese", "Guacamole"],
      price: 18.0,
      imagePath: "../assets/img/close-up-delicious-taco-plate.jpg",
    },
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
