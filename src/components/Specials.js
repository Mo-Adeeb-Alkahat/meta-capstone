// Specials.js
import React from "react";
import "./Specials.css";
import fimg from "../imgs/greek salad.jpg";
import simg from "../imgs/Bruchetta.png";
import timg from "../imgs/lemon dessert.jpg";

const Specials = () => {
  const specials = [
    {
      image: fimg,
      name: "Greek salad",
      price: "$12.99",
      description:
        " The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons..",
    },
    {
      image: simg,
      name: "Bruchetta",
      price: "$5.99",
      description:
        " Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      image: timg,
      name: " Lemon Dessert",
      price: " $5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    },
  ];

  return (
    <section className="specials" id="spec">
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
