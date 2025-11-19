import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SelectYourMood from "../components/SelectYourMood";

const ApplicationPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <SectionHeaders
          header="Cześć! Miło Cię Widzieć"
          description="Rozpocznij swoją podróż w kierunku lepszego zdrowia psychicznego."
        />

        <SelectYourMood />
      </main>
    </div>
  );
};

export default ApplicationPage;
