// About.js
import React from "react";
import "./About.css";
import aimg from "../imgs/Mario and Adrian A.jpg";
import bimg from "../imgs/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment the
            restaurant features a locally sourced menu with daily
            specials.Little Lemon is a charming neighborhood bistro that serves
            simple food and classic cocktails in a lively but casual environment
            the restaurant features a locally sourced menu with daily specials
          </p>
        </div>
        <div className="about-images">
          <img src={bimg} alt="Delicious dish 1" className="image-top" />
          <img src={aimg} alt="Delicious dish 2" className="image-bottom" />
        </div>
      </div>
    </section>
  );
};

export default About;
