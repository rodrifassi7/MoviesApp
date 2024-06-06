import "../../styles/navStyles.css";
import { InputSearch } from "./InputSearch";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      id="header-nav"
      className=" h-20 flex items-center fixed top-0 w-screen justify-evenly border-b-2 border-velde text-white z-10"
    >
      <div className=" sm:flex flex-grow justify-around  gap-10 ">
        <ul className="flex gap-10 ">
          <NavLink className={({isActive}) => `hover:scale-110 max-h-1 hover:text-velde transition-all ${isActive ? 'text-velde' : ''}`}
            to="/peliculas"
            >
           Peliculas
          </NavLink>
          <NavLink className={({isActive}) => `hover:scale-110 max-h-1 hover:text-velde transition-all ${isActive ? 'text-velde' : ''}`}
            to="/series"
            >
           Series
          </NavLink>
          <NavLink className={({isActive}) => `hover:scale-110 max-h-1 hover:text-velde transition-all ${isActive ? 'text-velde' : ''}`}
            to="/novedades"
            >
           Novedades
          </NavLink>
        </ul>
        <div>
          <InputSearch />
        </div>
      </div>
    </nav>
  );
};
