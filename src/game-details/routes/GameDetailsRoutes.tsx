import { Route, Routes } from "react-router-dom";
import { GameDetails } from "../pages/GameDetails";

export const GameDetailsRoutes = () => {
  return (
    <Routes>
      <Route path="/game-details" element={<GameDetails />} />
    </Routes>
  );
};
