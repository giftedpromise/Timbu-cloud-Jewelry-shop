import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full">
      {/* Navbar */}
      <div className="h-[80px] flex justify-between items-center px-4 bg-[#FAF3E6] text-customColor-500 text-18px font-medium relative">
        {/* Hamburger (visible on mobile) */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center flex-grow md:justify-center md:flex-grow-0">
          <img src={Logo} alt="Logo Image" className="w-[200px]" />
        </div>

        {/* Cart */}
        <Link to="/cart" className="hidden md:block">
          <FaShoppingCart size={50} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <li className="mx-2">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mx-2">
            <Link to="skills" smooth={true} duration={500}>
              Product
            </Link>
          </li>
          <li className="mx-2">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Cart (absolute positioning) */}
        <Link to="/cart" className="md:hidden absolute right-4 top-6">
          <FaShoppingCart size={50} />
        </Link>
      </div>

      <hr style={{ borderTop: "2px solid #22272F" }} />

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
