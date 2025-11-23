import { useContext, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import "react-day-picker/style.css";
import { ApplicationContext } from "../../ApplicationContext";

const CalendarMood = () => {
  const [storedMoods, setStoredMoods] = useState<
    { date: string; mood: string }[]
  >([]);

  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error(
      "CalendarMood musi być używany wewnątrz ApplicationContext.Provider"
    );

  const { nameTodayMood } = context;

  useEffect(() => {
    const moodsFromStorage = localStorage.getItem("moods");
    if (moodsFromStorage) setStoredMoods(JSON.parse(moodsFromStorage));
  }, [nameTodayMood]);

  const getMoodModifierName = (mood: string) => {
    switch (mood) {
      case "Świetnie":
        return "coolMood";
      case "Dobrze":
        return "happyMood";
      case "Neutralnie":
        return "neutralMood";
      case "Źle":
        return "badMood";
      case "Tragicznie":
        return "tragicMood";
      default:
        return null;
    }
  };

  const modifiers: {
    coolMood: Date[];
    happyMood: Date[];
    neutralMood: Date[];
    badMood: Date[];
    tragicMood: Date[];
  } = {
    coolMood: [],
    happyMood: [],
    neutralMood: [],
    badMood: [],
    tragicMood: [],
  };

  storedMoods.forEach(({ date, mood }) => {
    const moodModifier = getMoodModifierName(mood);
    if (moodModifier) modifiers[moodModifier].push(new Date(date));
  });

  const modifiersClassNames = {
    coolMood: "bg-emerald-400 font-semibold",
    happyMood: "bg-sky-400 font-semibold",
    neutralMood: "bg-yellow-400 font-semibold",
    badMood: "bg-orange-400 font-semibold",
    tragicMood: "bg-rose-400 font-semibold",
  };

  return (
    <div className="bg-white inline-block p-5 shadow rounded-2xl">
      <DayPicker
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        navLayout="around"
        locale={pl}
        animate
        mode="single"
      />
    </div>
  );
};

export default CalendarMood;
