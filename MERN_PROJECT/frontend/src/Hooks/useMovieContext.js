import { MoviesContext } from "../Context/MovieContext";
import { useContext } from "react";

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw Error('useMoviesContext must be used inside a MoviesContextProvider');
  }

  return context;
};
