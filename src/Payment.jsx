import React, { useState } from "react";
import { usecart, CartProvider } from "./context/cart_context";
import { useNavigate, Link } from "react-router-dom";
import useItems from "./Items";

const Payment = () => {
  const navigate = useNavigate();

  const items = useItems();

  const {
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
  } = usecart();

  const handlepaytm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="w-[50%] h-screen p-10">
        <form className="flex flex-col items-center justify-center mt-0">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Payment Details
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Card Number</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none"
              placeholder="Enter card number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Expiry Date</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">CVV</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none"
              placeholder="CVV"
            />
          </div>
          <button
            onClick={handlepaytm}
            className="w-[300px] bg-yellow-400 px-2 py-4 rounded text-gray-900 font-bold hover:bg-yellow-500"
          >
            Continue to Payment
          </button>
        </form>
      </div>

      <div className="w-[50%] h-screen p-6 mx-auto rounded-lg shadow-lg flex flex-col">
        <div className="mt-2 border-t">
          <p className="text-2xl font-bold text-center text-orange-600">
            Total: ${totalPrice}
          </p>
        </div>

        <div className="overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md border border-gray-200"
              />
              <div className="flex flex-col items-start flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  -
                </button>
                <span className="text-lg font-medium text-gray-700">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold text-gray-800 ml-4">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="w-[400px] bg-blue-500 px-2 py-4 text-gray-900 font-bold rounded-lg hover:bg-blue-600 transition duration-300 mx-auto flex items-center justify-center"
        >
          Continue to Shopping
        </Link>
      </div>
    </div>
  );
};

export default Payment;
