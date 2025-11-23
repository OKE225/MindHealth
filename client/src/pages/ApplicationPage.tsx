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

      <main className="w-[70%] mx-auto pb-25">
        <SectionHeaders
          header="Cześć! Miło Cię Widzieć"
          description="Rozpocznij swoją podróż w kierunku lepszego zdrowia psychicznego."
        />

        <AdvicesSection />
        <SelectYourMood />

        <div className="bg-white mt-5 p-5 rounded-2xl shadow">
          <h2 className="text-stone-900 text-2xl font-bold">Jasność umysłu</h2>
          <p className="text-stone-600 mb-5">
            Codzienna praktyka pomaga redukować stres, poprawia koncentrację i
            wspiera spokój ducha.
          </p>
          <RandomExercises />
        </div>

        <div className="bg-white mt-5 p-5 rounded-2xl shadow">
          <h2 className="text-stone-900 text-2xl font-bold">
            Zapisz notatkę do pamiętnika
          </h2>
          <p className="text-stone-600 mb-5">
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
