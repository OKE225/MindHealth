import { useState } from "react";

const ChatWithAI = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-end flex-col absolute bottom-0 right-0 m-5">
      {isOpen && (
        <div className="bg-white w-100 h-120  p-5 my-2 rounded-2xl shadow">
          <input type="text" className="bg-blue-100 shadow" />
        </div>
      )}

      <div
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-15 h-15 rounded-full cursor-pointer shadow"
        onClick={handleClick}></div>
    </div>
  );
};

export default ChatWithAI;
