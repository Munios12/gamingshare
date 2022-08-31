import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import * as api from "../../services/httpvideogames";
import { startLogout } from "../../store/auth/thunks";
import "./gamedetails.css";

export interface VideogameData {
  poster: string;
  description?: string;
  genre: string;
  metacritic?: number;
  released: string;
  name: string;
}

export const GameDetails = () => {
  const initialData: VideogameData = {
    poster: "",
    description: "",
    genre: "",
    metacritic: 0,
    released: "",
    name: "",
  };

  const dispatch = useDispatch();

  const [videogame, setVideogame] = useState(initialData);

  const { id } = useParams();

  useEffect(() => {
    api.getVideogameByID(id).then((data) => {
      const videogameData: VideogameData = {
        poster: data.background_image,
        description: data.description_raw,
        genre: data.genres[0].name,
        metacritic: data.metacritic,
        released: data.released,
        name: data.name,
      };
      console.log(videogameData);

      setVideogame(videogameData);
    });
  }, []);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const truncate = (string: any, n: number) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <section className="section__gamedetails">
        <div className="img_info__container">
          <img
            className="videogame-img gamedetails"
            alt={`${videogame.name}`}
            src={`${videogame.poster}`}
          />
          <p className="genre">{videogame.genre}</p>
          <h3>About The Videogame</h3>
          <div className="info__container">
            <p>{videogame.name}</p>
            <p>{videogame.released}</p>
            <p>Metacritic: {videogame.metacritic}</p>
          </div>
        </div>
        <p className="game-description">
          {truncate(videogame.description, 500)}
        </p>
      </section>
    </>
  );
};
