import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking a table with us.</p>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/booking")}>Reserve a Table</button>
    </div>
  );
};

export default ConfirmedBooking;
