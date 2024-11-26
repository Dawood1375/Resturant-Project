import React, { useState } from "react";
import Banner from "../components/Banner";
import MenuBar from "../components/Menubar";
import ProductData from "../components/ProductData";
import OurService from "../components/OurService";

const ProductDetails = () => {
  return (
    <>
      <MenuBar />
      <Banner
        backgroundImage="../src/assets/img/menubanner.png"
        title="PRODUCT DETAILS"
      />
      <ProductData />
      <OurService />
      <br />
    </>
  );
};

export default ProductDetails;
