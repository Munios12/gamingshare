import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Opinion } from "../../components/opinion/Opinion";
import { useReviewForm } from "../../hooks/useReviewForm";
import * as api from "../../services/httpvideogames";
import { startLogout } from "../../store/auth/thunks";
import { startLoadingReview, StartReview } from "../../store/review/thunks";
import { VideogameData } from "./gameDetailsInterfaces";
import "./gamedetails.css";

export const GameDetails = () => {
  const initialData: VideogameData = {
    poster: "",
    description: "",
    genre: "",
    metacritic: 0,
    released: "",
    name: "",
    id: 0,
  };
  const initialFormData = {
    review: "",
  };

  const { review, onInputChange } = useReviewForm(initialFormData);

  const reviewList = useSelector((state: any) => state.review.reviews);

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
        id: data.id,
      };

      setVideogame(videogameData);
    });
    dispatch(startLoadingReview());
  }, []);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const truncate = (text: any, n: number) => {
    return text?.length > n ? text.substring(0, n - 1) + "..." : text;
  };

  const videogamePageReviews = Object.values(reviewList).filter(
    (game: any) => game.idGame === id
  );

  const saveReview = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(StartReview(review, id));
    dispatch(startLoadingReview());
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
        <ul className="review-list">
          {videogamePageReviews.map((review: any) => (
            <li key={review.idMessage}>
              <Opinion review={review} />
            </li>
          ))}
        </ul>

        <form onSubmit={saveReview}>
          <input
            type="review"
            name="review"
            value={review}
            className="input-opinion"
            placeholder="Share your opinion"
            onChange={onInputChange}
          />
        </form>
      </section>
    </>
  );
};
