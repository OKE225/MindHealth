interface Props {
  message: string;
}

const ChatbotUserResponse = ({ message }: Props) => {
  return (
    <div className="flex justify-end my-2">
      <p className="bg-blue-600 text-white max-w-[70%] py-3 px-4 rounded-xl rounded-br-none leading-tight">
        {message}
      </p>
    </div>
  );
};

export default ChatbotUserResponse;
