import { useContext, useMemo } from "react";
import { ApplicationContext } from "../../ApplicationContext";
import { mouseClick } from "../../utils/mouseClick";

import { BsEmojiLaughingFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsEmojiFrownFill } from "react-icons/bs";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

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
    const defaultIconStyles = "text-6xl mb-2";
    switch (name) {
      case "Świetnie":
        return {
          containerStyles:
            "bg-emerald-200 hover:bg-emerald-400/75 active:bg-emerald-400",
          iconPath: (
            <BsEmojiLaughingFill
              className={`fill-emerald-800 ${defaultIconStyles}`}
            />
          ),
          moodNameStyles: "text-emerald-900",
        };
      case "Dobrze":
        return {
          containerStyles: "bg-sky-200 hover:bg-sky-400/75 active:bg-sky-400",
          iconPath: (
            <BsEmojiSmileFill className={`fill-sky-800 ${defaultIconStyles}`} />
          ),
          moodNameStyles: "text-sky-900",
        };
      case "Neutralnie":
        return {
          containerStyles:
            "bg-yellow-200 hover:bg-yellow-400/75 active:bg-yellow-400",
          iconPath: (
            <BsEmojiNeutralFill
              className={`fill-yellow-800 ${defaultIconStyles}`}
            />
          ),
          moodNameStyles: "text-yellow-900",
        };
      case "Źle":
        return {
          containerStyles:
            "bg-orange-200 hover:bg-orange-400/75 active:bg-orange-400",
          iconPath: (
            <BsEmojiFrownFill
              className={`fill-orange-800 ${defaultIconStyles}`}
            />
          ),
          moodNameStyles: "text-orange-900",
        };
      case "Tragicznie":
        return {
          containerStyles:
            "bg-rose-200 hover:bg-rose-400/75 active:bg-rose-400",
          iconPath: (
            <BsEmojiSmileUpsideDownFill
              className={`fill-rose-800 ${defaultIconStyles}`}
            />
          ),
          moodNameStyles: "text-rose-900",
        };
      default:
        return {
          containerStyles:
            "bg-stone-200 hover:bg-stone-400/75 active:bg-stone-400",
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
      className={`${containerStyles} p-10 flex flex-col items-center shadow rounded-2xl cursor-pointer active:scale-99 select-none`}
      onClick={() => {
        setTodayMood(name);
        saveMoodToLocaleStorage(name);
        mouseClick();
      }}>
      {iconPath}
      <p className={`${moodNameStyles} text-xl font-bold`}>{name}</p>
    </div>
  );
};

export default MoodCard;
