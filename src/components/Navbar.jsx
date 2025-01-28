import { NavLink } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <nav className="navbar position-absolute top-0 start-50 translate-middle-x mt-5">
      <NavLink to="/" className="text-white">Home</NavLink>
      <NavLink to="/about" className="text-white">About</NavLink>
      
      <NavLink to="/products" className="text-white">Product</NavLink>
      <NavLink to="/contact" className="text-white">Contact</NavLink>
      <NavLink to="/register" className="text-white">Register</NavLink>
      <NavLink to="/login" className="text-white">Login</NavLink>
    </nav>
  );
}

export default Navbar;
