import { Navigate, Route, Routes } from "react-router-dom";
import { MyFavouritesGame } from "../../components/favourites-games/MyFavouritesGame";
import HomePage from "../../components/home/HomePage";
import { GameDetails } from "../../game-details/pages/GameDetails";

export const MainAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game-details/:id" element={<GameDetails />} />
      <Route path="/favourites" element={<MyFavouritesGame />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
