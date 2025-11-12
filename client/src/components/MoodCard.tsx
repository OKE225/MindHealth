import coolEmoji from "../assets/icons8-cool-100.png"; // bg-green-700
import happyEmoji from "../assets/icons8-happy-100.png"; // bg-sky-700
import neutralEmoji from "../assets/icons8-boring-100.png"; // bg-yellow-700
import badEmoji from "../assets/icons8-sad-100.png"; // bg-orange-700
import tragicEmoji from "../assets/icons8-disappointed-100.png"; // bg-rose-700
import { useContext, useMemo } from "react";
import { ApplicationContext } from "../ApplicationContext";

interface Props {
  name: string;
}

const MoodCard = ({ name }: Props) => {
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error(
      "MoodCard musi być używany wewnątrz ApplicationContext.Provider"
    );

  const { setTodayMood } = context;

  const { containerStyles, iconPath, moodNameStyles } = useMemo(() => {
    switch (name) {
      case "Świetnie":
        return {
          containerStyles: "bg-green-200 hover:bg-green-400/75",
          iconPath: coolEmoji,
          moodNameStyles: "text-green-900",
        };
      case "Dobrze":
        return {
          containerStyles: "bg-sky-200 hover:bg-sky-400/75",
          iconPath: happyEmoji,
          moodNameStyles: "text-sky-900",
        };
      case "Neutralnie":
        return {
          containerStyles: "bg-yellow-200 hover:bg-yellow-400/75",
          iconPath: neutralEmoji,
          moodNameStyles: "text-yellow-900",
        };
      case "Źle":
        return {
          containerStyles: "bg-orange-200 hover:bg-orange-400/75",
          iconPath: badEmoji,
          moodNameStyles: "text-orange-900",
        };
      case "Tragicznie":
        return {
          containerStyles: "bg-rose-200 hover:bg-rose-400/75",
          iconPath: tragicEmoji,
          moodNameStyles: "text-rose-900",
        };
      default:
        return {
          containerStyles: "bg-stone-200 hover:bg-stone-400/75",
          iconPath: "",
          moodNameStyles: "",
        };
    }
  }, [name]);

  return (
    <div
      className={`${containerStyles} p-10 flex flex-col items-center rounded-2xl cursor-pointer`}
      onClick={() => {
        setTodayMood(name);
      }}>
      <img src={iconPath} className="w-25 mb-2" alt="" />
      <p className={`${moodNameStyles} text-2xl font-bold`}>{name}</p>
    </div>
  );
};

export default MoodCard;
