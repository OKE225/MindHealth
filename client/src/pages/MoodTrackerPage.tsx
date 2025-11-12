import CalendarMood from "../components/CalendarMood";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main>
        <SelectYourMood />
        <CalendarMood />
      </main>
    </div>
  );
};

export default MoodTrackerPage;
