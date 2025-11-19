import { mouseClick } from "../utils/mouseClick";

const DeleteNotesBtn = () => {
  const handleDeleteNotes = () => {
    mouseClick();

    setTimeout(() => {
      if (confirm("Czy na pewno chcesz usunąć wszystkie notatki?")) {
        localStorage.removeItem("notesList");
        window.location.reload();
      }
    }, 100);
  };

  return (
    <button
      className="bg-rose-500 text-rose-50 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-rose-600 active:bg-rose-700 cursor-pointer select-none shadow"
      onClick={handleDeleteNotes}>
      Usuń
    </button>
  );
};

export default DeleteNotesBtn;
