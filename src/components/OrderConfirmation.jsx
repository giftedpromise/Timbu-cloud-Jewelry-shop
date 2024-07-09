import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const OrderConfirmation = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Order Confirmation
      </h1>
      <div className="bg-[#FAF3E6] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>

        <div className="flex justify-end mt-8">
          <Link
            to="/"
            className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 rounded-lg mr-4"
          >
            Continue Shopping
          </Link>
          {/* You can add more elements here, such as a button to view orders or other options */}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
