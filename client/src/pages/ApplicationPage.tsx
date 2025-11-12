import NavbarWithLinks from "../components/NavbarWithLinks";
import SelectYourMood from "../components/SelectYourMood";
import WelcomeMessage from "../components/WelcomeMessage";

const ApplicationPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <WelcomeMessage />

        <SelectYourMood />
      </main>
    </div>
  );
};

export default ApplicationPage;
