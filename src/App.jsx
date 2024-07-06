import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="div">
      <NavBar />
      <div className="main-content  bg-[#FAF3E6]">
        <Home />
      </div>
    </div>
  );
};

export default App;
