import React, { useContext } from "react";
import tacoImage from "../assets/img/close-up-delicious-taco-plate.jpg";
import { ProductContext } from "../context/context.js";
import "../index.css";

function Product() {
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <p className="text-center">No products available at the moment.</p>;
  }

  return (
    <div className="product-container flex justify-center flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="product flex items-center border rounded-lg shadow-sm p-4 bg-white w-full"
        >
          {/* Image Section */}
          <img
            src={tacoImage}
            alt={`A plate of ${product.name}`}
            className="w-24 h-24 object-cover rounded-md"
          />

          {/* Product Details */}
          <div className="flex-1  pl-10">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600">
              {product.ingredients.join(", ")}
            </p>
            <div className="text-lg font-semibold mt-2">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
