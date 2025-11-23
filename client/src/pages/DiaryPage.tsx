import { Link } from "react-router";
import DiaryNotesList from "../components/Diary/DiaryNotesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import DeleteNotesBtn from "../components/Diary/DeleteNotesBtn";
import { mouseClick } from "../utils/mouseClick";

const DiaryPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto relative pb-25">
        <SectionHeaders
          header="Pamiętnik Myśli"
          description="Miejsce, w którym możesz swobodnie zapisać swoje myśli, emocje i
        refleksje, by lepiej zrozumieć siebie i śledzić swój rozwój."
        />

        <Link
          to="/application/diary/add"
          className="bg-blue-500 text-white inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-blue-600 active:bg-blue-700 select-none shadow"
          onClick={mouseClick}>
          Dodaj
        </Link>
        <DiaryNotesList />

        <DeleteNotesBtn />
      </main>
    </div>
  );
};

export default DiaryPage;
