import { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import ChatbotPopup from "./ChatbotPopup";
import { assistantInfo } from "./assistantInfo";
import type { ChatType } from "../../types/ChatType";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatType[]>([
    { hideInChat: true, role: "model", text: assistantInfo },
  ]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-end flex-col fixed z-100 bottom-0 right-0 m-5 max-lg:m-2">
      {isOpen && (
        <ChatbotPopup
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
      )}

      <div
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-97 transition-colors duration-100 ease-in-out flex justify-center items-center w-15 h-15 max-lg:w-12 max-lg:h-12 max-md:w-15 max-md:h-15 rounded-full cursor-pointer shadow"
        onClick={handleClick}>
        <TbMessageChatbotFilled className="text-4xl max-lg:text-3xl max-md:text-4xl fill-white" />
      </div>
    </div>
  );
};

export default Chatbot;
