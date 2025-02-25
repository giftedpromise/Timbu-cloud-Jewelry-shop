import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { totalItems } = useContext(CartContext); // Access totalItems from CartContext

  const handleClick = () => {
    setNav(!nav);
  };

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className="w-full">
      <div className="h-[80px] flex justify-between items-center px-4 bg-[#FAF3E6] text-customColor-500 text-18px font-medium relative">
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div className="flex items-center justify-center flex-grow md:justify-center md:flex-grow-0">
          <img src={Logo} alt="Logo Image" className="w-[200px]" />
        </div>

        <Link
          to="/cart"
          className="hidden md:block absolute right-16 top-2 hover:text-[#3F001F] transition duration-300"
        >
          <div className="relative">
            <FaShoppingCart
              size={30}
              className="hover:scale-110 transition-transform duration-300"
            />
            {totalItems > 0 && ( // Display quantity if totalItems > 0
              <span className="absolute top-0 right-0 bg-[#3F001F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
        <Link
          to="/cart"
          className="md:hidden absolute right-4 top-6 hover:text-[#3F001F] transition duration-300"
        >
          <div className="relative">
            <FaShoppingCart
              size={30}
              className="hover:scale-110 transition-transform duration-300"
            />
            {totalItems > 0 && ( // Display quantity if totalItems > 0
              <span className="absolute top-0 right-0 bg-[#3F001F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>

        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <li className="mx-2">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="hover:text-[#3F001F] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/product"
              onClick={closeMobileMenu}
              className="hover:text-[#3F001F] transition duration-300"
            >
              Product
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="hover:text-[#3F001F] transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="hover:text-[#3F001F] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <hr style={{ borderTop: "2px solid #22272F" }} />

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#FAF3E6] text-customColor-500 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={closeMobileMenu}
            to="/"
            className="hover:text-[#3F001F] transition duration-300"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={closeMobileMenu}
            to="/product"
            className="hover:text-[#3F001F] transition duration-300"
          >
            Product
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={closeMobileMenu}
            to="/about"
            className="hover:text-[#3F001F] transition duration-300"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={closeMobileMenu}
            to="/contact"
            className="hover:text-[#3F001F] transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
