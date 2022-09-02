import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { gamesFavListSlice } from "./fav-gamelist/gamesFavListSlice";
import { reviewSlice } from "./review/reviewSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    favlist: gamesFavListSlice.reducer,
    review: reviewSlice.reducer,
  },
});
