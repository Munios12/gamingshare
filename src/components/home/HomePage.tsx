import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import * as api from "../../services/httpvideogames";
import { VideogamePoster } from "../videogame-poster/VideogamePoster";
import "./homepage.css";
import { Header } from "../header/Header";
import { startLoadingFavGames } from "../../store/fav-gamelist/thunks";

export interface IvideogamePoster {
  id: number;
  name: string;
  poster: string;
}

const HomePage = () => {
  const initialVideogameList: Array<IvideogamePoster> = [];

  const [videogames, setVideogames] = useState(initialVideogameList);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  useEffect(() => {
    api.getVideogames().then((data) => {
      const videogamesList = data.results.map((data: any) => {
        return {
          id: data.id,
          name: data.name,
          poster: data.background_image,
        };
      });

      setVideogames(videogamesList);
    });
    dispatch(startLoadingFavGames());
  }, []);

  return (
    <>
      <Header onLogout={onLogout} />
      <main className="main__container">
        <section className="videogameList__section">
          <ul className="videogameList__container">
            {videogames.map((videogame: IvideogamePoster) => (
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

export default HomePage;
