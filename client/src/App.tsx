import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import ChatPage from "./pages/ChatPage";
import MindfulnessPage from "./pages/MindfulnessPage";
import CBTModulesPage from "./pages/CBTModulesPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/application" element={<ApplicationPage />} />
      <Route path="/application/mindfulness" element={<MindfulnessPage />} />
      <Route path="/application/cbt-modules" element={<CBTModulesPage />} />
      <Route path="/application/mood-tracker" element={<MoodTrackerPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default App;
