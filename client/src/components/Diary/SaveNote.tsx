import { useContext, useState } from "react";
import { mouseClick } from "../../utils/mouseClick";
import { useNavigate } from "react-router";
import { DiaryContext } from "../../DiaryContext";

const SaveNote = () => {
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
    mouseClick();

    setTimeout(() => {
      if (content) {
        const noteObj = {
          content,
          date: new Date().toISOString().substring(0, 10),
        };
        addNoteToList(noteObj);

        const updateNotesList = [...notesList, noteObj];
        localStorage.setItem("notesList", JSON.stringify(updateNotesList));

        setContent("");
        alert("Notatka dodana do pamiętnika");
        navigate("/application");
      } else {
        alert("Zawartość notatki jest pusta");
      }
    }, 100);
  };

  return (
    <div className="relative">
      <textarea
        className="bg-white text-lg block w-full min-h-100 p-2.5 rounded-2xl shadow focus:outline-none focus:shadow-lg resize-none"
        placeholder="Zapisz tutaj..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-emerald-500 text-white inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-emerald-600 active:bg-emerald-700 shadow cursor-pointer absolute bottom-3 right-3"
        onClick={handleSave}>
        Zapisz
      </button>
    </div>
  );
};

export default SaveNote;
