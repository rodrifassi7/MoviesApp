import { useParams, useLocation } from "react-router-dom";
import { useMovieById } from "../hooks/getMovieById";

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const locationMovie = location.state?.movie;

  // Suponiendo que estás en la primera página de los resultados de películas
  const { movie, loading, error } = useMovieById(1, id);
  const selectedMovie = locationMovie || movie;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedMovie) {
    return <div>Película no encontrada</div>;
  }

  return (
    <div>
      <h1 className="text-velde"> {movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.overview}
      />
      <p>{selectedMovie.overview}</p>
      <p>Rating: {selectedMovie.vote_average}</p>
    </div>
  );
};
