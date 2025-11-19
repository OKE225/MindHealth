import { Link } from "react-router";
import DiaryNotesList from "../components/DiaryNotesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import DeleteNotesBtn from "../components/DeleteNotesBtn";
import { mouseClick } from "../utils/mouseClick";

const MemorialsPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <SectionHeaders
          header="Pamiętnik Myśli"
          description="Miejsce, w którym możesz swobodnie zapisać swoje myśli, emocje i
        refleksje, by lepiej zrozumieć siebie i śledzić swój rozwój."
        />

        <Link
          to="/application/diary/add"
          className="bg-blue-500 text-blue-50 inline-block font-semibold text-md px-4 py-2 rounded-2xl hover:bg-blue-600 active:bg-blue-700 select-none shadow"
          onClick={mouseClick}>
          Dodaj
        </Link>
        <DiaryNotesList />

        <DeleteNotesBtn />
      </main>
    </div>
  );
};

export default MemorialsPage;
