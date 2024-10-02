// Header.js
import React from "react";
import "./Header.css";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Logo type="header" />
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#menu" className="nav-link">
          Menu
        </a>
        <a href="#reservation" className="nav-link">
          Reservation
        </a>
        <a href="#order" className="nav-link">
          Order Online
        </a>
        <a href="#login" className="nav-link">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
