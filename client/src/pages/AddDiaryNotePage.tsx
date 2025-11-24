import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SaveNote from "../components/Diary/SaveNote";

const AddDiaryNotePage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="max-w-325 w-[70%] max-2xl:w-[80%] max-xl:w-[85%] max-lg:w-[90%] max-md:w-[92.5%] mx-auto pb-10">
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
