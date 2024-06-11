import { useMemo } from "react";
import { useFetchMovies } from "./useFetchMovies";

export const useMovieById = (page, id) => {
  const { movies, loading, error } = useFetchMovies(page);
  const movie = useMemo(
    () => movies.find((movie) => movie.id === parseInt(id, 10)),
    [movies, id]
  );

  return { movie, loading, error };
};
