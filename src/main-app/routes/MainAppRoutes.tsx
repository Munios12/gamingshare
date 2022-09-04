import { Navigate, Route, Routes } from "react-router-dom";
import { MyFavouritesGame } from "../../components/favourites-games/MyFavouritesGame";
import { GameDetails } from "../../game-details/pages/GameDetails";
import { Home } from "../pages/Home";

export const MainAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-details/:id" element={<GameDetails />} />
      <Route path="/favourites" element={<MyFavouritesGame />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
