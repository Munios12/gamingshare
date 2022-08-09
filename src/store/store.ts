import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { videoGameSlice } from "./videogames/videoGameSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    videogame: videoGameSlice.reducer,
  },
});
