import { createSlice } from "@reduxjs/toolkit";

export const prizeSlice = createSlice({
  name: "prize",
  initialState: [
    { name: "獎品1", count: 1, probability: 1 },
    { name: "獎品2", count: 1, probability: 30 },
    { name: "獎品3", count: 3, probability: 130 },
    { name: "獎品4", count: 5, probability: 180 },
    { name: "獎品5", count: 9, probability: 250 },
  ],
});

export default prizeSlice.reducer;
