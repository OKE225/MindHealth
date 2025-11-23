import { mouseClick } from "../../utils/mouseClick";

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
      className="absolute right-0 text-rose-500 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-rose-500 hover:text-white active:bg-rose-600 cursor-pointer select-none hover:shadow"
      onClick={handleDeleteNotes}>
      Usuń
    </button>
  );
};

export default DeleteNotesBtn;
