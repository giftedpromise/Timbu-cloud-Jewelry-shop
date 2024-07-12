import React, { useContext, useState } from "react";
import Jewelry1 from "../assets/images/jewelry1.png";
import Jewelryframe from "../assets/images/jewelryFrame.png";
import CartIcon from "../assets/images/products/cart.png"; // Assuming this is your cart icon image
import { data } from "../data/data";
import Contact from "./Contact";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [notifications, setNotifications] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotifications((prev) => ({
      ...prev,
      [item.id]: `${item.name} added to cart!`,
    }));
    setTimeout(() => {
      setNotifications((prev) => ({
        ...prev,
        [item.id]: "",
      }));
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="my-0">
      <div className="flex flex-col justify-center items-center bg-[#FAF3E6] mt-0 p-4">
        <p className="bg-[#CEB483] text-[#22272F] text-[24px] font-medium rounded-full px-6 py-2 my-1 md:my-2">
          Welcome to our shop
        </p>
        <h1 className="text-4xl font-bold text-center font-playfair text-customColor-500 my-4 md:my-2 pb-2">
          Discover the Magic of Timeless Elegance
        </h1>
        <img src={Jewelry1} alt="Jewelry-one" className="mb-8 md:mb-0" />
      </div>

      <div className="m-9">
        <img src={Jewelryframe} alt="jewelry-frame" />
      </div>
      <div className="container mx-auto py-12 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="bg-[#FAF3E6] p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold font-playfair">
                    {item.name}
                  </h2>
                  {/* Use onClick to call handleAddToCart */}
                  <img
                    src={CartIcon}
                    alt="cart"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleAddToCart(item)} // Call handleAddToCart with item
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-700 font-playfair">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              {notifications[item.id] && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#3F001F] text-white text-center py-1 px-2 w-3/4 rounded-md">
                  {notifications[item.id]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Product;
