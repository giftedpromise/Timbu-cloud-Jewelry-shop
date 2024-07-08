import React from "react";
import footerLogo from "../assets/images/footerLogo.png";

const Contact = () => {
  return (
    <div className=" py-12 px-8">
      <div
        name="contact"
        className="flex flex-col md:flex-row justify-between items-start gap-8 bg-[#FAF3E6] p-8"
      >
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold  text-customColor-500 mb-2">
            Our Location
          </h1>
          <p className="text-lg font-medium  text-customColor-500">
            Charmed Circles Jewelry <br /> Riverside Shopping Complex, <br />{" "}
            Bamboo Avenue, Westlands, <br /> Nairobi, Kenya
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold  text-customColor-500 mb-2">
            Email Us
          </h1>
          <p className="text-lg font-medium  text-customColor-500">
            Charmedjewelry@gmail.com
          </p>
          <div className="mt-4">
            <h1 className="text-2xl font-bold  text-customColor-500 mb-2">
              Contact
            </h1>
            <p className="text-lg font-medium  text-customColor-500">
              +254798568726
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold  text-customColor-500 mb-2">
            Subscribe
          </h1>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-3/4  mb-2 mt-2 p-2 border border-gray-300 rounded-full custom-placeholder bg-[#FAF3E6]"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="w-3/4 mb-2 mt-2 p-2 border border-gray-300 rounded-full custom-placeholder bg-[#FAF3E6]"
          />
          <button className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 mt-2 rounded-full w-3/4">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-[#3F001F] p-8 flex items-center justify-between text-white">
        <p className="text-lg font-medium">
          @2024 All Rights served By Charmed Circles Jewelry
        </p>
        <img src={footerLogo} alt="footer logo" className="h-10 w-[200px]" />
      </div>
    </div>
  );
};

export default Contact;
