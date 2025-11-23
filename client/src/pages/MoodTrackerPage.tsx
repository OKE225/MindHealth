import CalendarMood from "../components/Mood/CalendarMood";
import MoodStatistics from "../components/Mood/MoodStatistics";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";
import SelectYourMood from "../components/Mood/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto">
        <SectionHeaders
          header="Mood Tracker"
          description="Monitoruj swoje emocje codziennie, aby poprawiać swoje zdrowie
        psychiczne każdego dnia"
        />

        <SelectYourMood />
        <span className="flex mt-5">
          <CalendarMood />
          <MoodStatistics />
        </span>
      </main>
    </div>
  );
};

export default MoodTrackerPage;
