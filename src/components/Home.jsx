import React from "react";
import Jewelry1 from "../assets/images/jewelry1.png";
import Jewelry2 from "../assets/images/jewelry2.png";
import Jewelry3 from "../assets/images/jewelry3.png";

const Home = () => {
  return (
    <div className="bg-[#FAF3E6] text-customColor-500 overflow-x-hidden">
      <p className="text-center text-custom-24 font-medium font-playfair">
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
            <span className="hidden md:inline">
              {" "}
              collection is crafted to perfection, ensuring you find{" "}
            </span>
            the perfect accessory for any occasion.
          </p>
          <button className="hidden md:inline bg-[#3F001F] text-white px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 px-4 md:px-0">
          <img src={Jewelry1} alt="Jewelry-one" className="mb-8 md:mb-0" />
          <div className="flex justify-between gap-8">
            <img src={Jewelry2} alt="Jewelry-two" className="w-[180px]" />
            <img
              src={Jewelry3}
              alt="Jewelry-three"
              className="w-[180px] pr-4 md:pr-0" // Added pr-4 for padding-right on smaller screens
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-6">
        <button className="bg-[#3F001F] text-white px-10 py-2 rounded-lg mt-4 md:hidden">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
