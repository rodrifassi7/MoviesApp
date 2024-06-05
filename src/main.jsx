import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MovieDetails, Peliculas, Series } from "./movies/pages";
import { Home } from "./layouts";
import { NavBar } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="relative h-full w-full bg-slate-950">
      <div className="-z-40 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div className="pb-40 ">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
);
