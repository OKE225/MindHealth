import { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import ChatbotPopup from "./ChatbotPopup";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-end flex-col fixed bottom-0 right-0 m-5">
      {isOpen && <ChatbotPopup />}

      <div
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-97 flex justify-center items-center w-15 h-15 rounded-full cursor-pointer shadow"
        onClick={handleClick}>
        <TbMessageChatbotFilled className="text-4xl fill-white" />
      </div>
    </div>
  );
};

export default Chatbot;
