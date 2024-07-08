import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"; // Assuming you have a Cart component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
