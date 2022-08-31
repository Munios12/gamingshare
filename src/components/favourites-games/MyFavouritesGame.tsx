import React, { useEffect } from "react";
import { Header } from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { startLoadingFavGames } from "../../store/fav-gamelist/thunks";
import { IvideogamePoster } from "../home/HomePage";
import { VideogamePoster } from "../videogame-poster/VideogamePoster";

export const MyFavouritesGame = () => {
  const dispatch = useDispatch();

  const { favList } = useSelector((state: any) => state.favlist);

  const onLogout = () => {
    dispatch(startLogout());
  };

  useEffect(() => {
    dispatch(startLoadingFavGames());
  }, [favList]);

  return (
    <>
      <Header onLogout={onLogout} />
      <div>Lista de favoritos</div>
      <ul>
        {favList.map((videogame: IvideogamePoster) => (
          <li key={videogame.id}>
            <VideogamePoster videogame={videogame} />
          </li>
        ))}
      </ul>
    </>
  );
};
