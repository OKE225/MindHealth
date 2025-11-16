import { Link } from "react-router";
import DiaryNotesList from "../components/DiaryNotesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import DiaryHeaders from "../components/DiaryHeaders";

const MemorialsPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <DiaryHeaders />

        <Link
          to="/application/diary/add"
          className="bg-blue-500 text-blue-50 inline-block font-semibold text-md px-4 py-2 rounded-xl hover:bg-blue-600 active:bg-blue-700 shadow">
          Dodaj notatkę
        </Link>
        <DiaryNotesList />
      </main>
    </div>
  );
};

export default MemorialsPage;
