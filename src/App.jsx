import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="div">
      <NavBar />
      <div className="main-content  bg-[#FAF3E6]">
        <Home />
      </div>
      <Product />
      <Contact />
    </div>
  );
};

export default App;
