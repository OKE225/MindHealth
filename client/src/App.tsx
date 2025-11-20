import { Navigate, Route, Routes, useLocation } from "react-router";
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import MindfulnessPage from "./pages/MindfulnessPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";
import { ApplicationContext } from "./ApplicationContext";
import { useState } from "react";
import ExercisePage from "./pages/ExercisePage";
import DiaryPage from "./pages/DiaryPage";
import AddDiaryNotePage from "./pages/AddDiaryNotePage";
import { DiaryContext } from "./DiaryContext";
import type { NoteType } from "./types/Note";
import ChatWithAI from "./components/ChatWithAI";
// import Footer from "./components/Footer";

const App = () => {
  const [nameTodayMood, setNameTodayMood] = useState<string>(``);
  const [notesList, setNotesList] = useState<NoteType[]>(() => {
    const isSaved = localStorage.getItem("notesList");
    return isSaved ? JSON.parse(isSaved) : [];
  });

  const setTodayMood = (name: string) => setNameTodayMood(name);
  const addNoteToList = (note: NoteType) => {
    setNotesList((prevValue) => [...prevValue, note]);
  };

  const location = useLocation();

  return (
    <ApplicationContext.Provider value={{ nameTodayMood, setTodayMood }}>
      <DiaryContext.Provider value={{ notesList, addNoteToList }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/application/diary" element={<DiaryPage />} />
          <Route path="/application/diary/add" element={<AddDiaryNotePage />} />
          <Route
            path="/application/mindfulness"
            element={<MindfulnessPage />}
          />
          <Route
            path="/application/mindfulness/:id"
            element={<ExercisePage />}
          />
          <Route
            path="/application/mood-tracker"
            element={<MoodTrackerPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {location.pathname !== "/" && <ChatWithAI />}
        {/* <Footer /> */}
      </DiaryContext.Provider>
    </ApplicationContext.Provider>
  );
};

export default App;
