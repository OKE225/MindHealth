import { TbMessageChatbotFilled } from "react-icons/tb";

interface Props {
  message: string;
}

const ChatbotBotResponse = ({ message }: Props) => {
  return (
    <div className="flex items-end my-2">
      <div className="bg-blue-600 p-1.5 rounded-full mr-2">
        <TbMessageChatbotFilled className="fill-white text-2xl" />
      </div>
      <p className="bg-blue-100 max-w-[70%] py-3 px-4 rounded-xl rounded-bl-none leading-tight">
        {message}
      </p>
    </div>
  );
};

export default ChatbotBotResponse;
