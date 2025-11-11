import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";

const MoodTrackerPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main>
        <SelectYourMood />
      </main>
    </div>
  );
};

export default MoodTrackerPage;
