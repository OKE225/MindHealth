import React from "react";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  return (
    <nav
      className={
        children
          ? "bg-amber-500 flex justify-between items-center"
          : "bg-rose-500"
      }>
      <Header />

      {children && <div>{children}</div>}
    </nav>
  );
};

export default Navbar;
