import MemorialsHeaders from "../components/MemorialsHeaders";
import NavbarWithLinks from "../components/NavbarWithLinks";

const MemorialsPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <MemorialsHeaders />
      </main>
    </div>
  );
};

export default MemorialsPage;
