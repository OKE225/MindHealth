import { Link } from "react-router";
import DiaryNotesList from "../components/DiaryNotesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import DiaryHeaders from "../components/DiaryHeaders";

const MemorialsPage = () => {
  const handleDeleteNotes = () => {
    if (confirm("Czy na pewno chcesz usunąć wszystkie notatki?")) {
      localStorage.removeItem("notesList");
      window.location.reload();
    }
  };

  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <DiaryHeaders />

        <Link
          to="/application/diary/add"
          className="bg-blue-500 text-blue-50 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-blue-600 active:bg-blue-700 shadow">
          Dodaj Notatkę
        </Link>
        <DiaryNotesList />

        <button
          className="bg-rose-500 text-rose-50 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-rose-600 active:bg-rose-700 cursor-pointer shadow"
          onClick={handleDeleteNotes}>
          Usuń Notatki
        </button>
      </main>
    </div>
  );
};

export default MemorialsPage;
