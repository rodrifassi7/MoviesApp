import { useEffect, useState } from "react";
import { InputSearch } from "./components/InputSearch";
import { usePagination } from "./hooks/usePagination";
import { PagButton } from "./components/PagButton";

const apiAuth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzhmYjdhMTFjMzg2NzQ1NTYwOWMzNDAyZDNkOTRhNyIsInN1YiI6IjYzZjc2ODk0NjhiMWVhMDA4NjY4ZWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ox_CM6NqrUArhnLWd0Q2vGEB1A2YR8UpMVS8BZ6zsng";

function App() {
  const { page, onPreviousPage, onNextPage } = usePagination();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: { auth: apiAuth },
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <h1 className="text-red-500 text-center my-10 text-3xl">Movies App</h1>

      <InputSearch />

      <hr />
      <div className="flex mx-16 mt-6  flex-wrap gap-7  ">
        {movies.map((movie) => (
          <div className="mx-auto w-40" key={movie.id}>
            {movie.title}
            <img
              className="h-60 w-60"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.overview}
            />
            {/* descripcion : {movie.overview} */}
          </div>
        ))}
      </div>

      <div className="mx-20 my-16 flex justify-between">
        <PagButton
          disabled={page <= 1}
          label={"Atras"}
          onClick={onPreviousPage}
        />
        <PagButton label={"Siguiente"} onClick={onNextPage} />
      </div>
    </div>
  );
}

export default App;
