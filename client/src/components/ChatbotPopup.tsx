import { useEffect, useRef } from "react";
import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import ChatbotInput from "./ChatbotInput";
import type { ChatType } from "../types/ChatType";

interface Props {
  chatHistory: ChatType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatType[]>>;
}

const ChatbotPopup = ({ chatHistory, setChatHistory }: Props) => {
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const generateBotResponse = async (history: ChatType[]) => {
    const updateHistory = (text: string) =>
      setChatHistory((prev: ChatType[]) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);

    const historyToAPI = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: historyToAPI }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message);

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current)
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
  }, [chatHistory]);

  return (
    <div className="bg-white relative w-100 my-2 rounded-2xl shadow-xl overflow-hidden">
      <ChatbotHeader />
      <ChatbotBody chatBodyRef={chatBodyRef} chatHistory={chatHistory} />
      <ChatbotInput
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        generateBotResponse={generateBotResponse}
      />
    </div>
  );
};

export default ChatbotPopup;
