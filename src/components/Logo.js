import React from "react";
import "./Logo.css";
import logo from "../imgs/Logo.svg";
import flogo from "../imgs/Logo .svg";
function Logo({ type }) {
  if (type === "header") {
    return <img src={logo} alt="Logo" />;
  } else if (type === "footer") {
    return <img src={flogo} alt="Logo" />;
  }
}

export default Logo;
