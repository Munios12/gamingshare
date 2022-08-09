import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { IvideogamePoster } from "../../components/home/HomePage";
import { loadVideogame } from "./videoGameSlice";

export const loadVideogameOnPage = ({
  videogame,
  id,
}: {
  videogame: IvideogamePoster;
  id: number;
}) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    //await fetchVideogame(id)
    dispatch(loadVideogame(videogame));
  };
};
