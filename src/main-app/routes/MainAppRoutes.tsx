import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GameDetails } from "../../game-details/pages/GameDetails";
import { Home } from "../pages/Home";

export const MainAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-details/:id" element={<GameDetails />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
