// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Jewelry1 from "../assets/images/jewelry1.png";
import Jewelry2 from "../assets/images/jewelry2.png";
import Jewelry3 from "../assets/images/jewelry3.png";
import JewelryFrame from "../assets/images/jewelryFrame.png";
import FeaturedImg from "../assets/images/featuredimg.png";
import twentyImg from "../assets/images/2024img.png";
import { data } from "../data/data";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();
  const lastFourItems = data.slice(-4);

  const handleShopNowClick = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="bg-[#FAF3E6] text-customColor-500 overflow-x-hidden">
        <p className="text-center text-custom-24 font-medium font-playfair pt-10">
          Welcome to our shop <br /> Where Elegance Meets Innovation
        </p>

        <div
          name="home"
          className="flex flex-col md:flex-row justify-between md:px-[2rem] py-[2rem] gap-8"
        >
          <div className="md:w-1/2">
            <h1 className="text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-customColor-500 font-playfair text-center md:text-left">
              <span className="text-26px block md:hidden lg:hidden xl:hidden">
                Discover the Magic of Timeless Elegance
              </span>
              <span className="hidden md:block lg:block xl:block">
                Discover the Magic of Timeless Elegance
              </span>
            </h1>
            <p className="text-lg my-14 font-normal font-playfair text-center md:text-left">
              From statement necklaces to delicate rings, our
              <span className="md:inline">
                {" "}
                collection is crafted to perfection, ensuring you find{" "}
              </span>
              the perfect accessory for any occasion.
            </p>
            <button
              onClick={handleShopNowClick}
              className="hidden md:inline bg-[#3F001F] text-white px-4 py-2 rounded-lg"
            >
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 px-4 md:px-0">
            <img src={Jewelry1} alt="Jewelry-one" className="mb-8 md:mb-0" />
            <div className="flex justify-between gap-4 my-6 ">
              <img src={Jewelry2} alt="Jewelry-two" className="w-[180px]" />
              <img
                src={Jewelry3}
                alt="Jewelry-three"
                className="w-[180px] pr-4 md:pr-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-6">
          <button
            onClick={handleShopNowClick}
            className="bg-[#3F001F] text-white px-10 py-2 rounded-lg mt-4 md:hidden"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        {" "}
        {/* Adjust the padding as needed */}
        <img src={JewelryFrame} alt="Jewelry-frame" className="p-6" />
      </div>
      <h1 className="text-4xl m-6 font-bold font-playfair text-customColor-500">
        Featured Products
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:px-[2rem] py-[2rem] gap-8">
        {/* Featured image section */}

        <div className="md:w-1/2 mt-10 md:mt-0 px-4 md:px-0">
          <img
            src={FeaturedImg}
            alt="Featured Image"
            className="mb-8 md:mb-0 w-full"
          />
        </div>

        {/* Additional images section   */}
        <div className="md:w-1/2 mt-10 md:mt-0 px-4 md:px-0">
          /{" "}
          <div className="grid grid-cols-2 gap-4">
            {lastFourItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between bg-white p-4 rounded-lg"
              >
                <img src={item.image} alt={item.name} className="w-full " />
                <div className="flex flex-col justify-center bg-[#FAF3E6] p-2">
                  <p className="text-lg font-bold font-playfair">{item.name}</p>
                  <p className="text-lg font-bold text-gray-700 font-playfair">
                    {" "}
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center -mt-12 md:mt-14 h-screen">
        <img src={twentyImg} alt="2024" className="w-auto h-auto" />
        <p className="bg-[#CEB483] text-[#22272F] text-[18px] md:text-[24px] font-medium rounded-full px-6 py-2 my-6">
          Get 30% deals on our shop country wide
        </p>
        <h1 className="text-4xl  font-bold text-center font-playfair text-customColor-500">
          Exclusive 2024 Collection: Unique Designs, Premium <br /> Quality,
          Limited-Time Offers!
        </h1>
        <button
          onClick={handleShopNowClick}
          className="bg-[#3F001F] text-white px-10 py-2 rounded-lg mt-4"
        >
          Shop Now
        </button>
      </div>
      <div className="-mt-10 md:mt-14">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
