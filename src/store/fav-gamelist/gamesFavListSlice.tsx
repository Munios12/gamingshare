import { createSlice } from "@reduxjs/toolkit";

export const gamesFavListSlice = createSlice({
  name: "favlist",
  initialState: {
    isSaving: true,
    savedGame: "",
    favList: [],
  },
  reducers: {
    addNewFavouriteGame: (state, action) => {
      console.log(state);
    },
    loadFavouriteGames: (state, action) => {},
    setSaving: (state) => {},
    deleteGameByID: (state, action) => {},
  },
});

export const {
  addNewFavouriteGame,
  loadFavouriteGames,
  setSaving,
  deleteGameByID,
} = gamesFavListSlice.actions;
