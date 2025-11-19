import Header from "./Header";

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-3">
      <div className="flex justify-between items-center flex-wrap w-[80%] mx-auto select-none">
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;
