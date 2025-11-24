import { useContext } from "react";
import ExerciseCard from "./ExerciseCard";
import { ApplicationContext } from "../../ApplicationContext";

const MindfulnessExercisesList = () => {
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error(
      "MindfulnessExercisesList must be used within DiaryContext.Provider"
    );

  const { exercisesList, isLoadingExercises } = context;

  return isLoadingExercises ? (
    <div className="w-12 h-12 mx-auto border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  ) : (
    <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {exercisesList.map((exercise) => (
        <ExerciseCard key={exercise.id} {...exercise} />
      ))}
    </div>
  );
};

export default MindfulnessExercisesList;
