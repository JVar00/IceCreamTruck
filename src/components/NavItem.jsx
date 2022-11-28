import { NavLink } from "react-router-dom";

export const NavButton = ({ redirectTo = "/", inputName = "null" }) => {
  let sleep =
    "block py-2 pl-3 pr-4 text-white rounded hover:border-b-4 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 font-bold transition-all duration-400 ease-in-out";
  let active =
    "block py-2 pl-3 pr-4 text-white font-bold border-b-4 rounded md:bg-transparent text-fuchsia-900 md:p-0";

  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? active : sleep)}
        to={redirectTo}
      >
        {inputName}
      </NavLink>
    </div>
  );
};
