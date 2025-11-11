import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";
import WelcomeMessage from "../components/WelcomeMessage";

const ApplicationPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <WelcomeMessage />

      <main>
        <SelectYourMood />
      </main>
    </div>
  );
};

export default ApplicationPage;
