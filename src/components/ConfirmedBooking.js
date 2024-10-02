// ConfirmedBooking.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking a table with us.</p>
      <section className="btn-section">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/booking")}>Reserve a Table</button>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
