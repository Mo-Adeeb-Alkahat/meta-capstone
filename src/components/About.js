// About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to Little Lemon, a cozy spot in the heart of Chicago where
            we serve delicious dishes made from the freshest ingredients. Our
            mission is to provide a warm and welcoming atmosphere for all our
            guests.
          </p>
        </div>
        <div className="about-images">
          <img src="image1.jpg" alt="Delicious dish 1" className="image-top" />
          <img
            src="image2.jpg"
            alt="Delicious dish 2"
            className="image-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
