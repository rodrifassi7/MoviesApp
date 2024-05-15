import { Link } from "react-router-dom";

export const Poster = ({ movie }) => {

 
  if (!movie) {
    return "ERRRR";
  }

  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className="mx-auto w-40 hover:scale-105 pt-6 transition-transform duration-200">
      {/* <Link to={"/movieDetails"}> */}
      <Link
        to={{
          pathname: `/movieDetails/${movie.id}`,
          state: { movie },
        }}
      >

        {posterPath && (
          <img
            className="h-60 w-60 rounded-md"
            src={posterPath}
            alt={movie.overview}
          />
        )}
        <h4 className="text-white pt-2 text-center">{movie.original_title}</h4>

        {/* <h4 className="text-white">{movie.vote_average.toFixed(2)}</h4> */}
        {/* <h4 className="text-white">{movie.popularity}</h4> */}
      </Link>
    </div>
  );
};
