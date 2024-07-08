// src/components/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form data submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-8">
          <div className="bg-[#FAF3E6] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-lg font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-lg font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 rounded-lg w-full"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="bg-[#FAF3E6] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="w-full md:w-1/3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded mr-4"
                    />
                  </div>
                  <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="w-full md:w-1/3 text-right">
                    <p className="text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right mt-8">
              <p className="text-2xl font-bold">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
