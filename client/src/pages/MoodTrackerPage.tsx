import MoodCalendar from "../components/MoodCalendar";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main>
        <SelectYourMood />
        <MoodCalendar />
      </main>
    </div>
  );
};

export default MoodTrackerPage;
