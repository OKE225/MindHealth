import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../ApplicationContext";
import ExerciseCard from "./ExerciseCard";
import type { MindfulnessExercise } from "../../types/MindfulnessExercise";

const RandomExercises = () => {
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error(
      "MindfulnessExercisesList must be used within DiaryContext.Provider"
    );

  const { exercisesList, isLoadingExercises } = context;

  const [randomExercises, setRandomExercises] = useState<
    MindfulnessExercise[] | []
  >([]);

  useEffect(() => {
    const getRandomExercise = () => {
      const result = [];
      const newArray = [...exercisesList];

      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        result.push(newArray[randomIndex]);
        newArray.splice(randomIndex, 1);
      }

      return result;
    };

    setRandomExercises(getRandomExercise());
  }, [exercisesList]);

  return isLoadingExercises ? (
    <div className="w-12 h-12 mx-auto border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  ) : (
    <div className="grid grid-cols-3 gap-2 max-lg:[&>*:nth-child(3)]:hidden max-lg:grid-cols-2 max-sm:[&>*:nth-child(2)]:hidden max-sm:grid-cols-1">
      {randomExercises.map((exercise, index) => (
        <ExerciseCard key={index} {...exercise} />
      ))}
    </div>
  );
};

export default RandomExercises;
