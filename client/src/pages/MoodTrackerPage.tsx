import CalendarMood from "../components/CalendarMood";
import MoodStatistics from "../components/MoodStatistics";
import MoodTrackerHeaders from "../components/MoodTrackerHeaders";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <MoodTrackerHeaders />
        <SelectYourMood />
        <CalendarMood />
        <MoodStatistics />
      </main>
    </div>
  );
};

export default MoodTrackerPage;
