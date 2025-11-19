import coolEmoji from "../assets/icons8-cool-100.png"; // bg-green-700
import happyEmoji from "../assets/icons8-happy-100.png"; // bg-sky-700
import neutralEmoji from "../assets/icons8-boring-100.png"; // bg-yellow-700
import badEmoji from "../assets/icons8-sad-100.png"; // bg-orange-700
import tragicEmoji from "../assets/icons8-disappointed-100.png"; // bg-rose-700
import { useContext, useMemo } from "react";
import { ApplicationContext } from "../ApplicationContext";
import { mouseClick } from "../utils/mouseClick";

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
          containerStyles:
            "bg-emerald-100 hover:bg-emerald-400/75 active:bg-emerald-400",
          iconPath: coolEmoji,
          moodNameStyles: "text-emerald-900",
        };
      case "Dobrze":
        return {
          containerStyles: "bg-sky-100 hover:bg-sky-400/75 active:bg-sky-400",
          iconPath: happyEmoji,
          moodNameStyles: "text-sky-900",
        };
      case "Neutralnie":
        return {
          containerStyles:
            "bg-yellow-100 hover:bg-yellow-400/75 active:bg-yellow-400",
          iconPath: neutralEmoji,
          moodNameStyles: "text-yellow-900",
        };
      case "Źle":
        return {
          containerStyles:
            "bg-orange-100 hover:bg-orange-400/75 active:bg-orange-400",
          iconPath: badEmoji,
          moodNameStyles: "text-orange-900",
        };
      case "Tragicznie":
        return {
          containerStyles:
            "bg-rose-100 hover:bg-rose-400/75 active:bg-rose-400",
          iconPath: tragicEmoji,
          moodNameStyles: "text-rose-900",
        };
      default:
        return {
          containerStyles:
            "bg-stone-100 hover:bg-stone-400/75 active:bg-stone-400",
          iconPath: "",
          moodNameStyles: "",
        };
    }
  }, [name]);

  const saveMoodToLocaleStorage = (mood: string) => {
    const todayDate = new Date().toISOString().substring(0, 10);

    const storedMoods = localStorage.getItem("moods");
    const moodsArray = storedMoods ? JSON.parse(storedMoods) : [];

    const index = moodsArray.findIndex(
      (entry: { date: string }) => entry.date === todayDate
    );

    if (index !== -1) {
      moodsArray[index].mood = mood;
    } else {
      moodsArray.push({ date: todayDate, mood });
    }

    localStorage.setItem("moods", JSON.stringify(moodsArray));
  };

  return (
    <div
      className={`${containerStyles} p-10 flex flex-col items-center shadow rounded-2xl cursor-pointer active:scale-98 select-none`}
      onClick={() => {
        setTodayMood(name);
        saveMoodToLocaleStorage(name);
        mouseClick();
      }}>
      <img src={iconPath} className="w-15 mb-2" alt="icon" />
      <p className={`${moodNameStyles} text-xl font-bold`}>{name}</p>
    </div>
  );
};

export default MoodCard;
