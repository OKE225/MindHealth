import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SaveNote from "../components/Diary/SaveNote";

const AddDiaryNotePage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto">
        <SectionHeaders
          header="Dodaj Notatkę"
          description="Podziel się swoimi przemyśleniami, opowiedz, jak się dziś czujesz i
            czego się boisz — to przestrzeń tylko dla Ciebie. Dodaj swoje myśli,
            opisz emocje i obawy — zaufaj sobie i wyraź to, co masz w sercu."
        />

        <SaveNote />
      </main>
    </div>
  );
};

export default AddDiaryNotePage;
