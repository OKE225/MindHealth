import { TbMessageChatbotFilled } from "react-icons/tb";

const ChatbotHeader = () => {
  return (
    <div className="flex text-white items-center py-3 px-4 bg-blue-600">
      <div className="bg-white p-1.5 rounded-full mr-1">
        <TbMessageChatbotFilled className="fill-blue-600 text-2xl" />
      </div>
      <h3 className="text-xl font-semibold ml-1">Wsparciek AI</h3>
    </div>
  );
};

export default ChatbotHeader;
