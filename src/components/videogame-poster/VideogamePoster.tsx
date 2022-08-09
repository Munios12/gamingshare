import { IvideogamePoster } from "../home/HomePage";
import { Link as RouterLink } from "react-router-dom";
import "./videogame-poster.css";
import { Link } from "@mui/material";

export const VideogamePoster = ({
  videogame,
}: {
  videogame: IvideogamePoster;
}) => {
  return (
    <>
      <div className="videogame__poster">
        <Link component={RouterLink} to={`/game-details/${videogame.id}`}>
          <img
            className="videogame-img"
            alt={`${videogame.name}`}
            src={`${videogame.poster}`}
          />
        </Link>
        <p className="videogame__title">{videogame.name}</p>
        <button>Add Favourite</button>
      </div>
    </>
  );
};
