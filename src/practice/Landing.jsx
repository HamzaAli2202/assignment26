import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Home } from "./Home";
export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
