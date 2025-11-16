import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";

const MindfulnessExercisesList = () => {
  const [exercisesList, setExercisesList] = useState<MindfulnessExercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://mind-health-backend.vercel.app/api/mindfulness")
      .then((response) => response.json())
      .then((data) => {
        setExercisesList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error.message);
        setExercisesList([]);
      });
  }, []);

  return isLoading ? (
    <div className="w-12 h-12 mx-auto border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  ) : (
    <div className="grid grid-cols-3 gap-2">
      {exercisesList.map((exercise) => (
        <ExerciseCard key={exercise.id} {...exercise} />
      ))}
    </div>
  );
};

export default MindfulnessExercisesList;
