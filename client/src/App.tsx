import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import ChatPage from "./pages/ChatPage";
import MindfulnessPage from "./pages/MindfulnessPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";
import { ApplicationContext } from "./ApplicationContext";
import { useState } from "react";
import ExercisePage from "./pages/ExercisePage";
import MemorialsPage from "./pages/MemorialsPage";
import Footer from "./components/Footer";

const App = () => {
  const [nameTodayMood, setNameTodayMood] = useState<string>("");

  const setTodayMood = (name: string) => setNameTodayMood(name);

  return (
    <ApplicationContext.Provider value={{ nameTodayMood, setTodayMood }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/memorials" element={<MemorialsPage />} />
        <Route path="/application/mindfulness" element={<MindfulnessPage />} />
        <Route path="/application/mindfulness/:id" element={<ExercisePage />} />
        <Route path="/application/mood-tracker" element={<MoodTrackerPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </ApplicationContext.Provider>
  );
};

export default App;
