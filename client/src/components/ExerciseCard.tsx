import { Link } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";

const ExerciseCard = (exercise: MindfulnessExercise) => {
  const { id, title, description, category, duration, difficulty } = exercise;

  return (
    <Link
      to={`${id}`}
      state={{ exercise }}
      className="bg-white p-5 rounded-2xl">
      <p className="bg-sky-200 inline-block px-3 rounded-2xl">{category}</p>
      <h3 className="text-2xl">{title}</h3>
      <p className="">{description}</p>
      <div className="flex justify-between">
        <p>{duration}</p>
        <p className="bg-green-200 text-green-800 inline-block px-2 rounded-2xl">
          {difficulty}
        </p>
      </div>
    </Link>
  );
};

export default ExerciseCard;
