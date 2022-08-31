import { AnyAction } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { Dispatch } from "react";
import { FirebaseDB } from "../../firebase/config";
import { loadFavGames } from "../../helpers/loadFavGames";
import { getVideogameByID } from "../../services/httpvideogames";
import {
  addNewFavouriteGame,
  deleteGameByID,
  loadFavouriteGames,
} from "./gamesFavListSlice";

export const StartFavGame = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    getVideogameByID(id).then((data) => {
      const savedVideogame = {
        id: data.id,
        name: data.name,
        poster: data.background_image,
        idGame: "",
      };

      const { uid } = getState().auth;

      const newFavGame = {
        id: savedVideogame.id,
        name: savedVideogame.name,
        poster: savedVideogame.poster,
        idGame: "",
      };

      const setNewGame = doc(
        collection(FirebaseDB, `${uid}/gaming-share/favlist`)
      );

      newFavGame.idGame = setNewGame.id;

      setDoc(setNewGame, newFavGame);

      dispatch(addNewFavouriteGame(newFavGame));
    });
  };
};

export const startLoadingFavGames = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("El UID del usuario no existe");

    const favgamesList = await loadFavGames(uid);
    dispatch(loadFavouriteGames(favgamesList));
  };
};

export const startDeletingFavGame = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>, getState: any) => {
    const { uid } = getState().auth;

    const { favList } = getState().favlist;
    let selectedGameToDelete;

    if (favList) {
      selectedGameToDelete = favList.filter((game: any) => game.id === id);
    } else {
      throw new Error("No se ha encontrado el videojuego");
    }

    const docRef = doc(
      FirebaseDB,
      `${uid}/gaming-share/favlist/${selectedGameToDelete[0].idGame}`
    );

    await deleteDoc(docRef);

    dispatch(deleteGameByID(id));
  };
};
