import { createSlice } from "@reduxjs/toolkit";

export const videoGameSlice = createSlice({
  name: "videogames",
  initialState: {
    id: null,
    name: null,
    poster: null,
  },
  reducers: {
    loadVideogame: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.poster = payload.poster;
    },
  },
});

export const { loadVideogame } = videoGameSlice.actions;
