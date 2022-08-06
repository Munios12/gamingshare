import { Route, Routes } from "react-router-dom";
import { GameDetails } from "../pages/GameDetails";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/game-details" element={<GameDetails />} />
    </Routes>
  );
};
