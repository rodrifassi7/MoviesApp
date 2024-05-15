import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MainApp } from "./movies/pages/Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="relative h-full w-full bg-slate-950">
      <div className="-z-40 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <MainApp />
    </div>
  </BrowserRouter>
);
