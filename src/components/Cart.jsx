import React, { useContext } from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (item, increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      updateQuantity(item.unique_id, newQuantity);
    }
  };

  return (
    <div className="container pb-12 px-8">
      <h1 className="text-4xl text-customColor-500 py-12 bg-[#FAF3E6] font-bold text-center mt-0 mb-8">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-customColor-500">Your cart is empty</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item.unique_id}
              className="flex flex-col md:flex-row justify-between items-center shadow-lg rounded-lg overflow-hidden p-6 bg-[#FAF3E6]"
            >
              <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
                <img
                  src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="text-lg font-bold text-customColor-500">
                    {item.name}
                  </h2>
                  <button
                    onClick={() => removeFromCart(item.unique_id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
                <button
                  onClick={() => handleQuantityChange(item, -1)}
                  className="bg-[#D9D9D9] text-white px-2 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item, 1)}
                  className="bg-[#D9D9D9] text-white px-2 rounded"
                >
                  +
                </button>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="text-lg font-bold text-customColor-500">
                  Total: $
                  {(item.current_price[0].USD[0] * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center mt-8">
            <p className="text-2xl font-bold text-customColor-500">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 rounded-lg mt-4"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white text-lg font-bold px-4 py-2 mb-6 rounded-lg mt-4"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Cart;
