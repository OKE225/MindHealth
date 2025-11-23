import AdvicesSection from "../components/AdvicesSection";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SelectYourMood from "../components/Mood/SelectYourMood";

const ApplicationPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto">
        <SectionHeaders
          header="Cześć! Miło Cię Widzieć"
          description="Rozpocznij swoją podróż w kierunku lepszego zdrowia psychicznego."
        />

        <AdvicesSection />
        <SelectYourMood />
      </main>
    </div>
  );
};

export default ApplicationPage;
