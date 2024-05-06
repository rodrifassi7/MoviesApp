import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { MovieDetails } from "../components/MovieDetails";

export const MainApp = () => {
  return (
    <>
      <div className="pb-40 ">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>





      {/* <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode> */}
    </>
  );
};
