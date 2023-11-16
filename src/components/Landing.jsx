import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./Contact";
import { About } from "./About";
import { Product } from "./Product";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { MobileList } from "./MobileList";
import AddtoCart from "./AddtoCart";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cont" element={<Contact />} />
        <Route path="/prod" element={<Product />} />
        <Route path="/tech" element={<MobileList />} />
        <Route path="/cart" element={<AddtoCart />} />
      </Routes>
    </BrowserRouter>
  );
};
