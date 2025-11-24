import { useRef } from "react";
import type { ChatType } from "../../types/ChatType";

interface Props {
  chatHistory: ChatType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatType[]>>;
  generateBotResponse: (history: ChatType[]) => void;
}

const ChatbotInput = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Użyj danych przesłanych powyżej: ${userMessage}`,
        },
      ]);
    }, 500);
  };

  return (
    <form
      action="#"
      className="absolute bg-white bottom-0 w-full p-5"
      onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="w-full border-none outline-1 outline-blue-100 focus-within:outline-2 focus-within:outline-blue-500 rounded-full py-3 px-4 focus-within:shadow-xl"
        placeholder="Napisz wiadomość..."
        ref={inputRef}
      />
    </form>
  );
};

export default ChatbotInput;
