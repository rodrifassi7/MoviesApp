import { useState } from "react";
import retrato from "../../assets/images/retrato.jpg";
import { useNavigate } from "react-router-dom";

export const Avatar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const onLogOut = () => {
    navigate('/login', {
      replace: true
    })
  };

  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-2xl cursor-pointer"
        src={retrato}
        alt="User dropdown"
        onClick={toggleDropdown}
      />

      <div
        id="userDropdown"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 mt-2 ${
          isDropdownVisible ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Rodri Fassi</div>
          <div className="font-medium truncate">rodrifassi@gmail.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              xxxxxxx
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Administrar cuenta
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={onLogOut}
          >
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
};
