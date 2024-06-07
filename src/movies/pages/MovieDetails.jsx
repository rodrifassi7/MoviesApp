import { useLocation, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie || movie.id !== parseInt(id, 10)) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>{movie.original_title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.overview}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};
