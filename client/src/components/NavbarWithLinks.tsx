import { NavLink } from "react-router";
import Header from "./Header";
import { mouseClick } from "../utils/mouseClick";

const NavbarWithLinks = () => {
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    const baseStyle =
      "font-semibold text-black text-md px-4 py-2 mx-1 rounded-2xl";
    const activeStyle = isActive
      ? "bg-blue-500 text-blue-50 hover:bg-blue-600 active:bg-blue-700 shadow"
      : "hover:bg-sky-200 hover:text-blue-950 active:bg-sky-300";

    return `${baseStyle} ${activeStyle}`;
  };

  return (
    <nav className="bg-white shadow py-3">
      <div className="flex justify-between items-center flex-wrap w-[80%] mx-auto select-none">
        <Header />

        <div className="flex flex-wrap">
          <NavLink
            to="/application"
            end
            className={getClassNames}
            onClick={mouseClick}>
            Panel
          </NavLink>
          <NavLink
            to="/application/diary"
            className={getClassNames}
            onClick={mouseClick}>
            Pamiętnik
          </NavLink>
          <NavLink
            to="/application/mindfulness"
            className={getClassNames}
            onClick={mouseClick}>
            Mindfulness
          </NavLink>
          <NavLink
            to="/application/mood-tracker"
            className={getClassNames}
            onClick={mouseClick}>
            Mood Tracker
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithLinks;
