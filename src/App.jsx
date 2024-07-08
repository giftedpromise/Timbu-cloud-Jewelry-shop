import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart"; // Import the Cart component

const App = () => {
  return (
    <Router>
      <div className="div">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} /> {/* Route for Cart */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
