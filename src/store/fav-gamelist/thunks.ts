import { AnyAction } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { Dispatch, useState } from "react";
import { FirebaseDB } from "../../firebase/config";
import { VideogameData } from "../../game-details/pages/GameDetails";
import { getVideogameByID } from "../../services/httpvideogames";

export const StartFavGame = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    getVideogameByID(id).then((data) => {
      const savedVideogame = {
        name: data.name,
        poster: data.background_image,
      };
    });

    const { uid } = getState().auth;
    const newFavGame = {
      name: "dasdasd",
      poster: "poster de tetris",
    };
    const setNewGame = doc(
      collection(FirebaseDB, `${uid}/gaming-share/favlist`)
    );
    const respuesta = await setDoc(setNewGame, newFavGame);
  };
};
