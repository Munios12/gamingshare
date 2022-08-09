import { Route, Routes } from "react-router-dom";
import { MyFavouritesGame } from "../../favourites-games/MyFavouritesGame";

export const FavouriteRoutes = () => {
  return (
    <Routes>
      <Route path="/favourites" element={<MyFavouritesGame />} />
    </Routes>
  );
};
