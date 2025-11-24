import AdvicesSection from "../components/AdvicesSection";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SelectYourMood from "../components/Mood/SelectYourMood";
import SaveNote from "../components/Diary/SaveNote";
import RandomExercises from "../components/MindfulnessExercises/RandomExercises";

const ApplicationPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="max-w-325 w-[70%] max-2xl:w-[80%] max-xl:w-[85%] max-lg:w-[90%] max-md:w-[92.5%] mx-auto pb-10">
        <SectionHeaders
          header="Cześć! Miło Cię Widzieć"
          description="Rozpocznij swoją podróż w kierunku lepszego zdrowia psychicznego."
        />

        <AdvicesSection />
        <SelectYourMood />

        <div className="bg-white mt-5 p-5 max-md:p-3 rounded-2xl shadow">
          <h2 className="text-stone-900 text-2xl font-bold">Jasność umysłu</h2>
          <p className="text-stone-600 mb-5 max-md:mb-3">
            Codzienna praktyka pomaga redukować stres, poprawia koncentrację i
            wspiera spokój ducha.
          </p>
          <RandomExercises />
        </div>

        <div className="bg-white mt-5 p-5 max-md:p-3 rounded-2xl shadow">
          <h2 className="text-stone-900 text-2xl font-bold">
            Zapisz notatkę do pamiętnika
          </h2>
          <p className="text-stone-600 mb-5 max-md:mb-3">
            Podziel się swoimi przemyśleniami, opowiedz, jak się dziś czujesz i
            czego się boisz.
          </p>
          <SaveNote />
        </div>
      </main>
    </div>
  );
};

export default ApplicationPage;
