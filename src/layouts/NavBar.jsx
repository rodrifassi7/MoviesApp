import "../styles/navStyles.css";
import { InputSearch } from "../components/InputSearch";

 

export const NavBar = () => {
  return (
    <nav
      id="header-nav"
      className=" h-20 flex items-center fixed top-0 w-screen justify-evenly border-b-2 border-velde text-white z-10"
    >
      <div className=" sm:flex flex-grow justify-around  gap-10 ">
        <ul className="flex gap-10 ">
          <li className="hover:scale-110 max-h-1 hover:text-velde transition-all">
          <a href="#">Peliculas</a>
          </li>
          <li className="hover:scale-110 max-h-1 hover:text-velde transition-all">
            <a href="#">Series</a>
          </li>
          <li className="hover:scale-110 max-h-1 hover:text-velde transition-all">
            <a href="#">Novedades</a>
          </li>
        </ul>
        <div>
          <InputSearch />
        </div>
      </div>
    </nav>
  );
};
