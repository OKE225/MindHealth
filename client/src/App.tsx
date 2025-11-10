import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import ApplicationPage from "./pages/ApplicationPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/application" element={<ApplicationPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default App;
