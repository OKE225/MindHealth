import { NavLink } from "react-router";
import Header from "./Header";
import { mouseClick } from "../utils/mouseClick";

const NavbarWithLinks = () => {
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    const baseStyle =
      "font-semibold text-md max-sm:text-sm px-4 max-sm:px-2 py-2 mx-1 max-sm:mx-0.25 rounded-2xl transition-colors duration-100 ease-in-out";
    const activeStyle = isActive
      ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 shadow"
      : "hover:bg-sky-200 text-stone-900 hover:text-blue-950 active:bg-sky-300";

    return `${baseStyle} ${activeStyle}`;
  };

  return (
    <nav className="bg-white shadow py-3 max-lg:py-2">
      <div className="flex justify-between items-center flex-wrap max-w-325 w-[70%] max-2xl:w-[80%] max-lg:w-[90%] max-sm:w-full mx-auto select-none">
        <Header />

        <div className="flex flex-wrap max-lg:mx-auto max-lg:mt-2 max-lg:mb-1 ">
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
            Mindful
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
