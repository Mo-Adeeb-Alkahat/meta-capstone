// Footer.js
import React from "react";
import "./Footer.css";
import img from "../imgs/footerLogo.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-column">
        <img src={img} className="fimg" />
      </div>
      <div className="footer-column">
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Reservation</a>
          </li>
          <li>
            <a href="#order">Order</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Contact</h2>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Lemon Street, Chicago, IL</p>
      </div>
      <div className="footer-column">
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
