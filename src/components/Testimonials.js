// Testimonials.js
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      title: "Amazing Experience!",
      body: "The food was absolutely delicious and the service was top-notch. Highly recommend!",
      avatar: "avatar1.jpg",
      name: "John Doe",
      date: "March 15, 2023",
    },
    {
      stars: 5,
      title: "Loved it!",
      body: "A wonderful dining experience with a cozy atmosphere. Will definitely come back!",
      avatar: "avatar2.jpg",
      name: "Jane Smith",
      date: "April 10, 2023",
    },
    {
      stars: 5,
      title: "Fantastic!",
      body: "The best restaurant in town! The dishes are unique and flavorful.",
      avatar: "avatar3.jpg",
      name: "Sam Wilson",
      date: "May 5, 2023",
    },
    {
      stars: 5,
      title: "Highly Recommend!",
      body: "Great food, great service, and a great ambiance. A must-visit!",
      avatar: "avatar4.jpg",
      name: "Emily Johnson",
      date: "June 20, 2023",
    },
  ];

  return (
    <section className="testimonials" style={{ backgroundColor: "#495E57" }}>
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
