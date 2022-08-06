import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/httpvideogames";

interface VideogameData {
  poster: string;
  description: string;
  genres: object;
  metacritic: number;
  name: string;
}

export const GameDetails = () => {
  const initialData: VideogameData = {
    poster: "",
    description: "",
    genres: {},
    metacritic: 0,
    name: "",
  };

  const [videogame, setVideogame] = useState(initialData);
  const { id } = useParams();
  useEffect(() => {
    api.getVideogameByID(id).then((data) => {
      const videogameData: VideogameData = {
        poster: data.background_image,
        description: data.description_raw,
        genres: {
          genre1: data.genres[0].name,
        },
        metacritic: data.metacritic,
        name: data.name,
      };
      setVideogame(videogameData);
    });
  }, []);

  console.log(videogame.name);

  return (
    <>
      <img
        className="videogame-img"
        alt={`${videogame.name}`}
        src={`${videogame.poster}`}
      />
      <p>{videogame.name}</p>
      <p>{videogame.metacritic}</p>
      <p>{videogame.description}</p>
    </>
  );
};
