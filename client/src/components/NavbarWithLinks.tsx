import { NavLink } from "react-router";
import Header from "./Header";

const NavbarWithLinks = () => {
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    const baseStyle = "font-medium text-black text-lg px-4 py-2 rounded-2xl";
    const activeStyle = isActive
      ? "bg-blue-600 text-white hover:bg-blue-600"
      : "hover:bg-sky-200";

    return `${baseStyle} ${activeStyle}`;
  };

  return (
    <nav className="bg-white shadow flex justify-between items-center p-3">
      <Header />

      <div>
        <NavLink to="/application" end className={getClassNames}>
          Panel
        </NavLink>
        <NavLink to="/application/mindfulness" className={getClassNames}>
          Mindfulness
        </NavLink>
        <NavLink to="/application/cbt-modules" className={getClassNames}>
          CBT Modules
        </NavLink>
        <NavLink to="/application/mood-tracker" className={getClassNames}>
          Mood Tracker
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarWithLinks;
