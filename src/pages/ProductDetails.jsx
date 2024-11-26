import React from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import ProductData from "../components/ProductData";
import OurService from "../components/OurService";

// Import images
import productBanner from "../assets/img/menubanner.png"; // Import the product banner image

const ProductDetails = () => {
  return (
    <>
      <MenuBar />
      {/* Use the imported banner image */}
      <Banner backgroundImage={productBanner} title="PRODUCT DETAILS" />
      <ProductData />
      <OurService />
      <br />
    </>
  );
};

export default ProductDetails;
