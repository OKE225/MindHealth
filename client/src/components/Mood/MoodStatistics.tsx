import { useEffect, useState } from "react";
import { isMoodTodaySelected } from "../../utils/isMoodTodaySelected";
import { calculateMoodStreak } from "../../utils/calculateMoodStreak";
import { FaFire } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

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
    <div className="flex flex-col max-w-100 gap-5">
      <div
        className={`flex h-full flex-col justify-center ml-5 text-center rounded-2xl shadow p-5 transition-colors duration-500 ease-in-out select-none ${
          isTodayCheck
            ? "bg-amber-400 text-amber-900"
            : "bg-stone-300 text-stone-800"
        }`}>
        <p className="text-xl font-semibold mb-2">streak</p>
        <p className="flex justify-center items-center text-6xl font-bold">
          {streak}{" "}
          {isTodayCheck ? (
            <FaFire className="text-4xl" />
          ) : (
            streak !== 0 && <FaClock className="text-4xl ml-1" />
          )}
        </p>
      </div>

      <div className="bg-white text-stone-500 h-auto flex flex-col justify-center p-5 ml-5 rounded-2xl shadow">
        <p>Najczęściej czułeś się</p>
        <p>
          <strong className="text-stone-900">
            {mostFrequentMood.moodName}
          </strong>
          , łącznie przez{" "}
          <strong className="text-stone-900">
            {mostFrequentMood.count}{" "}
            {mostFrequentMood.count === 1 ? "dzień" : "dni"}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default MoodStatistics;
