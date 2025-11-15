import CalendarMood from "../components/CalendarMood";
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
      </main>
    </div>
  );
};

export default MoodTrackerPage;
