import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { MoviesRoutes } from "../movies/routes/MoviesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MoviesRoutes />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
