import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

const MainComponent = () => {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default MainComponent;
