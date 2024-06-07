import { PagButton } from "../components/PagButton";
import { Poster } from "../components/Poster";
import { useFetchMovies, usePagination } from "../hooks";
import { useEffect } from "react";

export const Peliculas = () => {
  const { page, onPreviousPage, onNextPage } = usePagination();
  const { movies, loading, error } = useFetchMovies(page);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex md:mx-16 flex-wrap md:gap-7 gap-3">
        {movies.map((movie) => (
          <Poster key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="mx-20 py-16 flex justify-between">
        <PagButton
          disabled={page <= 1}
          label={"Atras"}
          onClick={onPreviousPage}
        />
        <PagButton label={"Siguiente"} onClick={onNextPage} />
      </div>
    </div>
  );
};
