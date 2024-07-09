import React, { useState } from "react";
import footerLogo from "../assets/images/footerLogo.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending the data to a server

    // Simulating successful submission
    setIsSubmitted(true);

    // Clear form fields
    setName("");
    setEmail("");

    // Hide the message after a few seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div
        name="contact"
        className="flex flex-col md:flex-row justify-between items-start gap-8 bg-[#FAF3E6] p-8 flex-grow"
      >
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold text-customColor-500 mb-2">
            Our Location
          </h1>
          <p className="text-lg font-medium text-customColor-500">
            Charmed Circles Jewelry <br /> Riverside Shopping Complex, <br />
            Bamboo Avenue, Westlands, <br /> Nairobi, Kenya
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold text-customColor-500 mb-2">
            Email Us
          </h1>
          <p className="text-lg font-medium text-customColor-500">
            Charmedjewelry@gmail.com
          </p>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-customColor-500 mb-2">
              Contact
            </h1>
            <p className="text-lg font-medium text-customColor-500">
              +254798568726
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold text-customColor-500 mb-2">
            Subscribe
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-3/4 mb-2 mt-2 p-2 border border-gray-300 rounded-full custom-placeholder bg-[#FAF3E6]"
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 mb-2 mt-2 p-2 border border-gray-300 rounded-full custom-placeholder bg-[#FAF3E6]"
              required
            />
            <button
              type="submit"
              className="bg-[#3F001F] text-white text-lg font-bold px-4 py-2 mt-2 rounded-full w-3/4"
            >
              Submit
            </button>
          </form>
          {isSubmitted && (
            <p className="text-customColor-500 mt-4">Submission successful!</p>
          )}
        </div>
      </div>
      <div className="bg-[#3F001F] p-8 flex items-center justify-between text-white">
        <p className="text-lg">
          @2024 All Rights reserved By Charmed Circles Jewelry
        </p>
        <img src={footerLogo} alt="footer logo" className="h-10 w-[200px]" />
      </div>
    </div>
  );
};

export default Contact;
