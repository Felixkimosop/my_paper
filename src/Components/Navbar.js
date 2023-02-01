import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-removebg-preview.png";

function Navbar() {
  return (
    <div className="bg-gray-100 navbar">
      <img src={logo} alt="Your Company" />
      <h1>
        Write <span className="text-red-700	">my</span> Paper
      </h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/ordernow">
            <span className="text-red-700	">Order Now</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
