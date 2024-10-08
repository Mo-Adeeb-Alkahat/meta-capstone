import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroimg from "../imgs/restauranfood.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" style={{ backgroundColor: "#495E57" }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
          <h2 style={{ color: "white" }}>Chicago</h2>
          <p style={{ color: "white" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <button
            style={{ backgroundColor: "#F4CE14", color: "black" }}
            className="reserve-button"
            onClick={() => navigate("/booking")}
          >
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img
            src={heroimg}
            alt="Delicious dish"
            width="300px"
            height="400px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
