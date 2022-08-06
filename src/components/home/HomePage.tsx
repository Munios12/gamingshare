import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import * as api from "../../services/httpvideogames";
import { VideogamePoster } from "../videogame-poster/VideogamePoster";

import "./homepage.css";
import { Header } from "../header/Header";

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
      console.log(videogamesList);
    });
  }, []);

  return (
    <>
      <Header onLogout={onLogout} />
      <main>
        <div>
          <section className="videogameList__section">
            <ul className="videogameList__container">
              {videogames.map((videogame: IvideogamePoster) => (
                <li key={videogame.id}>
                  <VideogamePoster videogame={videogame} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
