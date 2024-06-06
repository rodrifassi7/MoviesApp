import { useEffect, useState } from "react";

export const useFetchMovies = (page) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  return { movies, loading, error };
};
