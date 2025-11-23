import ChatbotBotResponse from "./ChatbotBotResponse";
import ChatbotUserResponse from "./ChatbotUserResponse";

interface ChatType {
  hideInChat?: boolean;
  role: string;
  text: string;
}

interface Props {
  chatBodyRef: React.Ref<HTMLDivElement>;
  chatHistory: ChatType[];
}

const ChatbotBody = ({ chatBodyRef, chatHistory }: Props) => {
  return (
    <div
      className="flex flex-col h-110 px-4 py-2 mb-22 overflow-y-auto"
      ref={chatBodyRef}>
      <ChatbotBotResponse
        message="Hey there 💖
        How can I help you today?"
      />

      <ChatbotUserResponse message="Cześć jestem użytkownikiem" />

      {chatHistory.map(
        (chat, index) =>
          !chat.hideInChat &&
          (chat.role === "model" ? (
            <ChatbotBotResponse key={index} message={chat.text} />
          ) : (
            <ChatbotUserResponse key={index} message={chat.text} />
          ))
      )}
    </div>
  );
};

export default ChatbotBody;
