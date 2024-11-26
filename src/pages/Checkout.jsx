import React, { useState, useEffect } from "react";
import MenuBar from "../components/Menubar";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const navigate = useNavigate();

  // Fetch cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !address) {
      alert("Please fill out all fields.");
      return;
    }

    // Process the order (you can send data to an API here)
    console.log("Order placed:", {
      name,
      email,
      address,
      paymentMethod,
      cart,
    });

    // Clear cart after order is placed
    localStorage.removeItem("cart");
    setCart([]);

    // Navigate to the order confirmation page
    navigate("/order-confirmation");
  };

  // Calculate the total price of items in the cart
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxAmount = (totalAmount * 0.15).toFixed(2); // 15% tax
  const finalTotal = (totalAmount + parseFloat(taxAmount)).toFixed(2);

  return (
    <>
      <MenuBar />
      <Banner
        backgroundImage="../src/assets/img/menubanner.png"
        title="Checkout"
      />
      {/* Back to Cart */}
      <div className="container mx-auto p-4">
        <Link to="/cart" className="text-teal-500 flex items-center mb-4">
          <i className="fa-solid fa-chevron-left text-lg mr-2"></i>
        </Link>
      </div>
      {/* Cart Details */}
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Checkout</h1>
        {cart.length === 0 ? (
          <p>
            Your cart is empty. Please add items to your cart before proceeding.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 montserrat">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 montserrat">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 montserrat">
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border rounded-md montserrat"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="payment" className="block mb-2 montserrat">
                  Payment Method
                </label>
                <div className="border p-2 rounded-md">
                  <div
                    className={`flex items-center p-2 ${
                      paymentMethod === "Credit Card" ? "bg-teal-100" : ""
                    }`}
                    onClick={() => setPaymentMethod("Credit Card")}
                  >
                    <i className="fa-solid fa-credit-card text-teal-500 mr-2"></i>
                    <span>Credit Card</span>
                  </div>
                  <div
                    className={`flex items-center p-2 ${
                      paymentMethod === "PayPal" ? "bg-teal-100" : ""
                    }`}
                    onClick={() => setPaymentMethod("PayPal")}
                  >
                    <i className="fa-brands fa-paypal text-teal-500 mr-2"></i>
                    <span>PayPal</span>
                  </div>
                  <div
                    className={`flex items-center p-2 ${
                      paymentMethod === "Cash on Delivery" ? "bg-teal-100" : ""
                    }`}
                    onClick={() => setPaymentMethod("Cash on Delivery")}
                  >
                    <i className="fa-solid fa-truck text-teal-500 mr-2"></i>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-teal-500 montserrat text-white p-4 rounded-lg shadow-xl"
                >
                  Place Order
                </button>
              </div>
            </form>

            {/* Right Section: Order Summary */}
            <div
              className="border-2 border-black p-4 rounded-md"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-2xl mb-4 montserrat">Order Summary</h2>
              <div className="grid grid-cols-2 montserrat mt-2">
                <span className="montserrat">Items Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 montserrat">
                <span className="montserrat">Tax (15%)</span>
                <span className="montserrat ">${taxAmount}</span>
              </div>
              <div className="grid grid-cols-2 montserrat">
                <span>Shipping</span>
                <span className="montserrat">$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="grid grid-cols-2 font-bold mt-2 montserrat">
                <span className="montserrat">Total</span>
                <span>${finalTotal}</span>
              </div>
              <hr className="mt-2" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
