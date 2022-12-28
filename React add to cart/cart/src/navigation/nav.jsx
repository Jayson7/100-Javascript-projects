import React from "react";
// import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// all pages
import Homepage from "../Pages/home";
import Cart from "../cart storage/cart";
import Product from "../cart storage/product";
import Contact from "../Pages/contact";

// routes for all pages including cart, product and homepage
function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
