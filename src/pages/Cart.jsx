import React, { useEffect, useState } from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import "../index.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import cartBanner from "../assets/img/menubanner.png";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch cart from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to remove item from the cart
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Function to update the quantity of a product
  const updateQuantity = (index, action) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        const updatedQuantity =
          action === "increase" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(updatedQuantity, 1) }; // Ensure quantity is at least 1
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Navigate to checkout page if cart is not empty
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty"); // You can use toastify for showing errors
    } else {
      navigate("/checkout"); // Navigate to checkout page
    }
  };

  return (
    <>
      <MenuBar />
      <Banner backgroundImage={cartBanner} title="CART ITEMS" />

      {/* Back to Product Details Link */}
      <div className="container mx-auto p-4">
        <Link
          to="/productdetails"
          className="text-teal-500 flex items-center mb-4"
        >
          <i className="fa-solid fa-chevron-left text-lg mr-2"></i>
        </Link>
      </div>
      {/* CART  */}

      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="flex items-center p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 mr-2"
                      />
                      <div>
                        <div className="montserrat">{item.name}</div>
                        <div className="text-red-600">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-gray-600">${item.price}</td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <button
                          className="border rounded-sm border-gray-900 px-4 sm:px-5 py-2"
                          onClick={() => updateQuantity(index, "decrease")}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-10 text-center border"
                        />
                        <button
                          className="border rounded-sm border-gray-900 px-4 sm:px-5 py-2"
                          onClick={() => updateQuantity(index, "increase")}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 text-gray-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-2">
                      <button className="" onClick={() => removeItem(index)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Input field section */}
          <div>
            <h1 className="text-2xl mb-2">Coupon Code</h1>
            <div className="mt-4 h-12 flex rounded-lg">
              <input
                type="email"
                placeholder="Enter The Code"
                className="p-2 w-full rounded-lg bg-transparent federo-regular"
              />
              <button className="bg-teal-500 text-white p-2 rounded-r-lg">
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill section */}
          <div>
            <h1 className="text-2xl mb-2">Total Bill</h1>
            <div className="border border-gray-900 p-4 w-full">
              <div className="grid grid-cols-2 mb-2 montserrat">
                <span>Cart Subtotal</span>
                <span className="text-right text-gray-700">
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-2 mb-2 montserrat">
                <span>Shipping Charge</span>
                <span className="text-right text-gray-700 montserrat">
                  $0.00
                </span>
              </div>
              <hr className="border-t border-gray-300 my-2" />
              <div className="grid grid-cols-2 font-bold montserrat">
                <span>Total Amount</span>
                <span className="text-right montserrat text-gray-700">
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Now button */}
        <div className="flex justify-end">
          <button
            onClick={handleCheckout} // Use the handleCheckout function
            className="bg-teal-500 shadow-xl rounded-lg text-white p-4 mt-4"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
