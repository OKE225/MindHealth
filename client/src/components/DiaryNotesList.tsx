import { useContext } from "react";
import { DiaryContext } from "../DiaryContext";

const DiaryNotesList = () => {
  const context = useContext(DiaryContext);
  if (!context)
    throw new Error("DiaryNotesList must be used within DiaryContext.Provider");

  const { notesList } = context;

  return (
    <div className="grid grid-cols-2 gap-2 my-5">
      {notesList.length > 0 ? (
        notesList.map((note, id) => (
          <div className="relative bg-white text-lg p-5 pb-8 whitespace-pre-wrap rounded-2xl shadow">
            <p key={id}>{note.content}</p>
            <p className="absolute text-stone-400 right-4 bottom-1">
              {note.date}
            </p>
          </div>
        ))
      ) : (
        <p>Brak notatek w pamiętniku. Dodaj swoją pierwszą notatkę!</p>
      )}
    </div>
  );
};

export default DiaryNotesList;
