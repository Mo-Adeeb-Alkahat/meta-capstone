// Specials.js
import React from "react";
import "./Specials.css";

const Specials = () => {
  const specials = [
    {
      image: "special1.jpg",
      name: "Special Dish 1",
      price: "$15.99",
      description: "A delicious special dish made with fresh ingredients.",
    },
    {
      image: "special2.jpg",
      name: "Special Dish 2",
      price: "$12.99",
      description: "A delightful dish that is sure to please your taste buds.",
    },
    {
      image: "special3.jpg",
      name: "Special Dish 3",
      price: "$18.99",
      description: "A gourmet dish that is both flavorful and satisfying.",
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h1>This week’s specials!</h1>
        <button className="order-button">Order Online</button>
      </div>
      <div className="specials-cards">
        {specials.map((special, index) => (
          <div className="special-card" key={index}>
            <img
              src={special.image}
              alt={special.name}
              className="special-image"
            />
            <div className="special-details">
              <div className="special-name-price">
                <h2 className="special-name">{special.name}</h2>
                <span className="special-price">{special.price}</span>
              </div>
              <p className="special-description">{special.description}</p>
              <button className="delivery-button">Order Delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
