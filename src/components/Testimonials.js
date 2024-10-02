// Testimonials.js
import React from "react";
import "./Testimonials.css";
import avatar from "../imgs/avatar.png";

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      title: "Review title",
      body: " Review body",
      avatar,
      name: " Reviewer name",
      date: "March 15, 2023",
    },
    {
      stars: 5,
      title: "Review title",
      body: " Review body",
      avatar,
      name: " Reviewer name",
      date: "April 10, 2023",
    },
    {
      stars: 5,
      title: "Review title",
      body: " Review body",
      avatar,
      name: " Reviewer name",
      date: "May 5, 2023",
    },
    {
      stars: 5,
      title: "Review title",
      body: " Review body",
      avatar,
      name: " Reviewer name",
      date: "June 20, 2023",
    },
  ];

  return (
    <section
      className="testimonials"
      style={{ backgroundColor: "#495E57" }}
      id="testo"
    >
      <h1 style={{ color: "white" }}>Our customers love us!</h1>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"★".repeat(testimonial.stars)}</div>
            <h2 className="review-title">{testimonial.title}</h2>
            <p className="review-body">{testimonial.body}</p>
            <div className="reviewer">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="avatar"
              />
              <div className="reviewer-info">
                <span className="reviewer-name">{testimonial.name}</span>
                <span className="review-date">{testimonial.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
