import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { Peliculas, Series, MovieDetails } from "../pages";
import { Home } from "../../layouts/Home";

export const MoviesRoutes = () => {
  return (
    <>
      <div className="relative h-full w-full bg-slate-950">
        <div className="-z-40 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        <div className="pb-40">
          <NavBar />
        </div>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
