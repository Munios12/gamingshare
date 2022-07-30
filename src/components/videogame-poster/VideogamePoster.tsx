import { IvideogamePoster } from "../home/HomePage";
import "./videogame-poster.css";

export const VideogamePoster = ({
  videogame,
}: {
  videogame: IvideogamePoster;
}) => {
  return (
    <>
      <div className="videogame__poster">
        <img
          className="videogame-img"
          alt={`${videogame.name}`}
          src={`${videogame.poster}`}
        />
        <p className="videogame__title">{videogame.name}</p>
      </div>
    </>
  );
};
