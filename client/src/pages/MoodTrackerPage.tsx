import CalendarMood from "../components/Mood/CalendarMood";
import MoodStatistics from "../components/Mood/MoodStatistics";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SelectYourMood from "../components/Mood/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="max-w-325 w-[70%] max-2xl:w-[80%] max-xl:w-[85%] max-lg:w-[90%] max-md:w-[92.5%] mx-auto pb-10">
        <SectionHeaders
          header="Mood Tracker"
          description="Monitoruj swoje emocje codziennie, aby poprawiać swoje zdrowie
        psychiczne każdego dnia"
        />

        <SelectYourMood />
        <span className="flex mt-5 max-sm:flex-col">
          <CalendarMood />
          <MoodStatistics />
        </span>
      </main>
    </div>
  );
};

export default MoodTrackerPage;
