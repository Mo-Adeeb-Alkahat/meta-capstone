import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import { fetchAPI } from "../api/api";

// Initialize times using the fetchAPI function
const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  return fetchAPI(today); // Use fetchAPI to get available times for today
};

// Update times using the fetchAPI function
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload); // Use fetchAPI with the new date
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    navigate("/confirmed");
  };

  return (
    <div>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Main;
