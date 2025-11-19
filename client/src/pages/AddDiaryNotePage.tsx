import { useContext, useState } from "react";
import NavbarWithLinks from "../components/NavbarWithLinks";
import { DiaryContext } from "../DiaryContext";
import { useNavigate } from "react-router";
import SectionHeaders from "../components/SectionHeaders";

const AddDiaryNotePage = () => {
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const context = useContext(DiaryContext);
  if (!context) {
    throw new Error(
      "AddDiaryNotePage must be used within DiaryContext.Provider"
    );
  }

  const { notesList, addNoteToList } = context;

  const handleSave = () => {
    if (content) {
      const noteObj = {
        content,
        date: new Date().toISOString().substring(0, 10),
      };
      addNoteToList(noteObj);

      const updateNotesList = [...notesList, noteObj];
      localStorage.setItem("notesList", JSON.stringify(updateNotesList));

      navigate("/application/diary");
    } else {
      alert("Zawartość notatki jest pusta");
    }
  };

  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <SectionHeaders
          header="Dodaj Notatkę"
          description="Podziel się swoimi przemyśleniami, opowiedz, jak się dziś czujesz i
            czego się boisz — to przestrzeń tylko dla Ciebie. Dodaj swoje myśli,
            opisz emocje i obawy — zaufaj sobie i wyraź to, co masz w sercu."
        />

        <div className="relative">
          <textarea
            className="bg-white text-lg block w-full min-h-100 p-2.5 rounded-2xl shadow focus:outline-none focus:shadow-lg resize-none"
            placeholder="Zapisz tutaj..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className="bg-emerald-500 text-emerald-50 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-emerald-600 active:bg-emerald-700 shadow cursor-pointer absolute bottom-3 right-3"
            onClick={handleSave}>
            Zapisz
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddDiaryNotePage;
