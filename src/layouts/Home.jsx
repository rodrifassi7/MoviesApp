import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { Poster, PagButton, Footer } from "../components";

export const Home = () => {
  const { page, onPreviousPage, onNextPage } = usePagination();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ2ZGM2YzVjOWE0YzQ1YmJlMmEwMDU4Mzg4ZmQ0YyIsInN1YiI6IjYzZjc2ODk0NjhiMWVhMDA4NjY4ZWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDSsVhxkand5frgGCkUf_vr-MLOhsDDxu44w3nAXlyU",
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
      <div className="flex md:mx-16 flex-wrap md:gap-7 gap-3">
        {movies.map((movie) => (
          <Poster
            // onClick={}
            key={movie.id}
            movie={movie}
          />
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
      <Footer />
    </div>
  );
};
