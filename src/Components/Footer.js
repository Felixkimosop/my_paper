import React from "react";
import logo from "./images/logo-removebg-preview.png";
import payment from "./images/payments-removebg-preview.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <h1>
          Write <span>My</span>Paper
        </h1>
      </div>
      <div className="services">
        <h3>Our services</h3>
        <ul>
          <li>
            <a href="#">Nursing Essay </a>
          </li>
          <li>
            {" "}
            <a href="#">Capstone Projects </a>
          </li>
          <li>
            {" "}
            <a href="#">Research Papers </a>
          </li>
          <li>
            {" "}
            <a href="#">Case Studies </a>
          </li>
          <li>
            {" "}
            <a href="#">Dissertation writing </a>
          </li>
          <li>
            {" "}
            <a href="#">Scholarship Essays </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <ul>
          <li>support@writemypaper.com</li>
        </ul>

        <h3>Payment options</h3>
        <img src={payment} alt="pay" />
      </div>
    </div>
  );
}

export default Footer;
