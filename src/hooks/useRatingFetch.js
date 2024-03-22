import { useState, useEffect } from "react";

export const useRatingFetch = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQ2ZGM2YzVjOWE0YzQ1YmJlMmEwMDU4Mzg4ZmQ0YyIsInN1YiI6IjYzZjc2ODk0NjhiMWVhMDA4NjY4ZWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDSsVhxkand5frgGCkUf_vr-MLOhsDDxu44w3nAXlyU",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const firstFourImages = data.results.slice(0, 4).map((result) => ({
          id: result.id,
          imageUrl: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
          description: result.overview,
          title: result.title,
        }));

        setPopular(firstFourImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return popular;
};
