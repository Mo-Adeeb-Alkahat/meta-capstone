import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct initial state", () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state for UPDATE_TIMES action", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const newState = updateTimes(initialState, {
    type: "UPDATE_TIMES",
    payload: "2023-10-10",
  });
  expect(newState).toEqual(initialState);
});
