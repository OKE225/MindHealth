import { useContext } from "react";
import { DiaryContext } from "../DiaryContext";
import DiaryNoteCard from "./DiaryNoteCard";

const DiaryNotesList = () => {
  const context = useContext(DiaryContext);
  if (!context)
    throw new Error("DiaryNotesList must be used within DiaryContext.Provider");

  const { notesList } = context;

  return (
    <div className="grid grid-cols-2 gap-2 my-5">
      {notesList.length > 0 ? (
        notesList.map((note, id) => <DiaryNoteCard key={id} {...note} />)
      ) : (
        <p>Brak notatek w pamiętniku. Dodaj swoją pierwszą notatkę!</p>
      )}
    </div>
  );
};

export default DiaryNotesList;
