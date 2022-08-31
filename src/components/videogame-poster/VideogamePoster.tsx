import { IvideogamePoster } from "../home/HomePage";
import { Link as RouterLink } from "react-router-dom";
import "./videogame-poster.css";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeletingFavGame,
  StartFavGame,
} from "../../store/fav-gamelist/thunks";
import favRojo from "../../assets/img/boton_like_rojo.png";
import botonLike from "../../assets/img/boton_like.png";
import { useEffect, useState } from "react";

export const VideogamePoster = ({
  videogame,
}: {
  videogame: IvideogamePoster;
}) => {
  const dispatch = useDispatch();
  const { favList } = useSelector((state: any) => state.favlist);

  const [handleFav, setHandleFav] = useState(
    favList.some((game: any) => game.name === `${videogame.name}`)
  );

  const saveGameToFav = (id: number) => {
    if (favList.some((game: any) => game.name === `${videogame.name}`)) {
      dispatch(startDeletingFavGame(id));
      setHandleFav(!handleFav);
      console.log(handleFav);
    } else {
      dispatch(StartFavGame(videogame.id));
      setHandleFav(!handleFav);
      console.log(handleFav);
    }
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
        <button className="fav_btn" onClick={() => saveGameToFav(videogame.id)}>
          {handleFav ? (
            <img src={favRojo} alt="favRojo" />
          ) : (
            <img src={botonLike} alt="fav" />
          )}
        </button>
      </div>
    </>
  );
};
