import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../layouts/Home";
import { NavBar } from "../../layouts/NavBar";
import { MovieDetails } from "./MovieDetails";

export const MainApp = () => {
  return (
    <>
      <div className="pb-40 ">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to="/" />} />
        {/* <Route path="/movieDetails" element={<MovieDetails />} /> */}
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>

      {/* <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode> */}
    </>
  );
};
