import { createSlice } from "@reduxjs/toolkit";

export const gamesFavListSlice = createSlice({
  name: "favlist",
  initialState: {
    isSaving: false,
    savedGame: "",
    favList: [],
  },
  reducers: {
    addNewFavouriteGame: (state: any, action) => {
      state.favList.push(action.payload);
      state.isSaving = false;
    },
    loadFavouriteGames: (state, action) => {
      state.favList = action.payload;
    },
    deleteGameByID: (state, action) => {
      state.favList = state.favList.filter(
        (game: any) => game.id !== action.payload
      );
    },
  },
});

export const { addNewFavouriteGame, loadFavouriteGames, deleteGameByID } =
  gamesFavListSlice.actions;
