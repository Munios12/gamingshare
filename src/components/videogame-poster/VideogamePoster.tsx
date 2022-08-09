import { IvideogamePoster } from "../home/HomePage";
import { Link as RouterLink } from "react-router-dom";
import "./videogame-poster.css";
import { Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { StartFavGame } from "../../store/fav-gamelist/thunks";

export const VideogamePoster = ({
  videogame,
}: {
  videogame: IvideogamePoster;
}) => {
  const dispatch = useDispatch();
  const saveGameToFav = () => {
    dispatch(StartFavGame(videogame.id));
  };

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
        <button onClick={saveGameToFav}>Add Favourite</button>
      </div>
    </>
  );
};
