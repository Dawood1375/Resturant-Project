import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress styles

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Franchising from "./pages/Franchising";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainCourse from "./pages/MainCourse";
import Dessert from "./pages/Dessert";
import Drinks from "./pages/Drinks";
import ContextProvider from "./context/ContextProvider.jsx";

import "./index.css";

const App = () => {
  const location = useLocation(); // Tracks the current route

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({ showSpinner: false });
    NProgress.start(); // Start progress bar when location changes

    const timer = setTimeout(() => {
      NProgress.done(); // Finish the progress bar after loading
    }, 500); // Simulate load time

    return () => {
      clearTimeout(timer); // Clear timer to avoid memory leaks
    };
  }, [location]); // Runs when the location changes

  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mainCourse" element={<MainCourse />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </ContextProvider>
  );
};

export default App;
