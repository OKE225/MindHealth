import { useEffect, useState } from "react";
import { isMoodTodaySelected } from "../utils/isMoodTodaySelected";
import { calculateMoodStreak } from "../utils/calculateMoodStreak";

interface MoodEntry {
  date: string;
  mood: string;
}

const MoodStatistics = () => {
  const [streak, setStreak] = useState<number>(0);
  const [isTodayCheck, setIsTodayCheck] = useState<boolean>(false);

  const storedMoods = localStorage.getItem("moods") || "[]";
  const parseMoods: MoodEntry[] = JSON.parse(storedMoods);

  useEffect(() => {
    setIsTodayCheck(isMoodTodaySelected(parseMoods));
    setStreak(calculateMoodStreak(parseMoods));
  }, [parseMoods]);

  const calculateMostFrequentMood = () => {
    const moodsCount: { [key: string]: number } = {};

    parseMoods.forEach(({ mood }: MoodEntry) => {
      moodsCount[mood] = (moodsCount[mood] || 0) + 1;
    });

    let maxMood: string = "";
    let maxCount: number = 0;

    for (const mood in moodsCount) {
      if (moodsCount[mood] > maxCount) {
        maxCount = moodsCount[mood];
        maxMood = mood;
      }
    }

    return { moodName: maxMood, count: maxCount };
  };

  const mostFrequentMood = calculateMostFrequentMood();

  return (
    <>
      <div
        className={`flex flex-col w-[30%] justify-center ml-5 text-center rounded-2xl shadow p-5 ${
          isTodayCheck
            ? "bg-amber-400 text-amber-900"
            : "bg-stone-400 text-stone-900"
        }`}>
        <p className="text-5xl">streak</p>
        <p className="text-5xl">{streak}</p>
        {/* <p>ICON</p> */}
      </div>

      <div className="bg-white w-[70%] flex flex-col justify-center p-5 ml-5 rounded-2xl shadow">
        <p className="">
          Najczęściej czułeś się <strong>{mostFrequentMood.moodName}</strong> –
          przez{" "}
          <strong>
            {mostFrequentMood.count}{" "}
            {mostFrequentMood.count === 1 ? "dzień" : "dni"}
          </strong>
        </p>
      </div>
    </>
  );
};

export default MoodStatistics;
