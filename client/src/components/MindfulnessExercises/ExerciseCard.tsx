import { Link } from "react-router";
import type { MindfulnessExercise } from "../../types/MindfulnessExercise";
import { mouseClick } from "../../utils/mouseClick";
import ExerciseContent from "./ExerciseContent";

const ExerciseCard = (exercise: MindfulnessExercise) => {
  const { id } = exercise;

  return (
    <Link
      to={`${id}`}
      state={{ exercise }}
      className="bg-white min-h-125 relative shadow rounded-2xl flex flex-col justify-between overflow-hidden hover:shadow-lg hover:scale-99"
      onClick={mouseClick}>
      <ExerciseContent {...exercise} />
    </Link>
  );
};

export default ExerciseCard;
