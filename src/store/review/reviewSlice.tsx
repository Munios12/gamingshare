import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  },
  reducers: {
    addNewReview: (state: any, action) => {
      state.reviews.push(action.payload);
    },
    loadAllReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { addNewReview, loadAllReviews } = reviewSlice.actions;
