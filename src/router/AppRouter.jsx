import { Navigate, Route, Routes } from "react-router-dom";

import { Peliculas } from "../movies/pages/Peliculas";
import { Series } from "../movies/pages/Series";
import { MovieDetails } from "../movies/pages/MovieDetails";
import { NavBar } from "../components";

export const AppRouter = () => {
  return (
    <>
      <div className="pb-40 ">
        <NavBar />
      </div>
      <Routes>
        <Route path="/*" element={<Navigate to="/peliculas" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

// <div className="relative h-full w-full bg-slate-950">
// <div className="-z-40 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
// </div>
