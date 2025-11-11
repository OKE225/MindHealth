import { Link } from "react-router";
import Navbar from "../components/Navbar";
import WelcomeMessage from "../components/WelcomeMessage";

const ApplicationPage = () => {
  return (
    <div>
      <Navbar>
        <Link to="/application">Panel</Link>
        <Link to="/application/mindfulness">Mindfulness</Link>
        <Link to="/application/cbt-modules">CBT Modules</Link>
        <Link to="/application/mood-tracker">Mood Tracker</Link>
      </Navbar>
      <WelcomeMessage />
    </div>
  );
};

export default ApplicationPage;
