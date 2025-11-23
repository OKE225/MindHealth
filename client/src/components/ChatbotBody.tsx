import type { ChatType } from "../types/ChatType";
import ChatbotBotResponse from "./ChatbotBotResponse";
import ChatbotUserResponse from "./ChatbotUserResponse";

interface Props {
  chatBodyRef: React.Ref<HTMLDivElement>;
  chatHistory: ChatType[];
}

const ChatbotBody = ({ chatBodyRef, chatHistory }: Props) => {
  return (
    <div
      className="flex flex-col h-110 px-4 py-2 mb-22 overflow-y-auto"
      ref={chatBodyRef}>
      <ChatbotBotResponse message="Cześć, jestem Wsparciek! 💙 Jak się dziś czujesz?" />

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
