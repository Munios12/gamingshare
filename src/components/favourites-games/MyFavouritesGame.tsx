import React, { useEffect } from "react";
import { Header } from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { startLoadingFavGames } from "../../store/fav-gamelist/thunks";

import { VideogamePoster } from "../videogame-poster/VideogamePoster";
import "./myfavouritesgames.css";
import { IvideogamePoster } from "../home/homeInterfaces";

export const MyFavouritesGame = () => {
  const dispatch = useDispatch();

  const { favList } = useSelector((state: any) => state.favlist);

  const onLogout = () => {
    dispatch(startLogout());
  };

  useEffect(() => {
    dispatch(startLoadingFavGames());
  }, []);

  return (
    <>
      <Header onLogout={onLogout} />
      <main className="main__favcontainer">
        <section className="favList-section">
          <ul className="favList__container">
            {favList.map((videogame: IvideogamePoster) => (
              <li key={videogame.id}>
                <VideogamePoster videogame={videogame} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};
