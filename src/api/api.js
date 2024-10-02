// src/api.js

const fetchAPI = (date) => {
  // Simulate different available times for different dates
  const times = {
    "2023-10-10": ["17:00", "18:00", "19:00", "20:00", "21:00"],
    "2023-10-11": ["17:30", "18:30", "19:30", "20:30", "21:30"],
    "2023-10-12": ["17:15", "18:15", "19:15", "20:15", "21:15"],
  };

  // Return the times for the given date, or a default set of times
  return times[date] || ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export default fetchAPI;
