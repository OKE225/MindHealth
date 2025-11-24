import Header from "./Header";

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-3 max-lg:py-2">
      <div className="flex justify-between items-center flex-wrap max-w-325 w-[70%] max-2xl:w-[80%] max-lg:w-[90%] max-sm:w-full mx-auto select-none">
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;
