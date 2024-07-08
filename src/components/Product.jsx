// Product.jsx
import React from "react";
import Jewelry1 from "../assets/images/jewelry1.png";
import Jewelryframe from "../assets/images/jewelryFrame.png";
import Cart from "../assets/images/products/cart.png";
import { data } from "../data/data";
import Contact from "./Contact";

const Product = () => {
  return (
    <div className="mb-0">
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
              className="shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
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
                  <div className="flex items-center">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 text-yellow-500"
                      >
                        <path d="M12 .587l3.668 7.476L24 9.763l-6 5.849 1.421 8.288L12 18.902 4.579 23.9 6 15.612 0 9.763l8.332-1.7L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-700 font-playfair">
                    ${item.price.toFixed(2)}
                  </p>
                  <img src={Cart} alt="cart" className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Product;
