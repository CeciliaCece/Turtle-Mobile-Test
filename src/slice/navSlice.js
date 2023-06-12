import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: [
    {
      title: "第一題",
      path: "/",
    },
    {
      title: "第二題",
      path: "/q2",
    },
    {
      title: "第四題",
      path: "/q4",
    },
    {
      title: "第五題",
      path: "/q5",
    },
  ],
});

export default navSlice.reducer;
