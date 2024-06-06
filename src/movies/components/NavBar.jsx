import "../../styles/navStyles.css";
import { Avatar } from "./Avatar";
import { InputSearch } from "./InputSearch";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <nav
      id="header-nav"
      className=" h-16 flex  fixed top-0 w-screen  border-b-2 border-velde text-white z-10 px-6 items-center"
    >
      <div className="  flex flex-grow sm:justify-between pt-3">
        <ul className="flex sm:gap-10 items-start">
          <Logo />

          <NavLink
            className={({ isActive }) =>
              `hover:scale-110 max-h-1 hover:text-velde transition-all ${
                isActive ? "text-velde" : ""
              }`
            }
            to="/peliculas"
          >
            Peliculas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:scale-110 max-h-1 hover:text-velde transition-all ${
                isActive ? "text-velde" : ""
              }`
            }
            to="/series"
          >
            Series
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:scale-110 max-h-1 hover:text-velde transition-all ${
                isActive ? "text-velde" : ""
              }`
            }
            to="/novedades"
          >
            Novedades
          </NavLink>
        </ul>
        <div className="flex  gap-4 ">
          <InputSearch />
          <Avatar />
        </div>
      </div>
    </nav>
  );
};
