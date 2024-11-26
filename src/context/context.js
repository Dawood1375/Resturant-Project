import { createContext } from "react";

// Initial data (array of products)
const initialData = [
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
];

// Create Context
export const ProductContext = createContext(initialData);
