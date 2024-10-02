// Header.js
import React from "react";
import "./Header.css";
import logo from "../imgs/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav-link">
          <img src={logo} alt="Logo" />
        </a>
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Menu
        </a>
        <a href="#" className="nav-link">
          Reservation
        </a>
        <a href="#" className="nav-link">
          Order Online
        </a>
        <a href="#" className="nav-link">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
