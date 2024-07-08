// src/components/Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center shadow-lg rounded-lg overflow-hidden p-6 bg-[#FAF3E6]"
            >
              <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
                <button
                  onClick={() => handleQuantityChange(item, -1)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item, 1)}
                  className="bg-green-500 text-white px-2 rounded"
                >
                  +
                </button>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="text-lg font-bold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center mt-8">
            <p className="text-2xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 rounded-lg mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
