import { Link } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";
import { getDifficultyClass } from "../utils/getDifficultyClass";

const ExerciseCard = (exercise: MindfulnessExercise) => {
  const { id, title, description, category, duration, difficulty } = exercise;

  const difficultyClass = getDifficultyClass(difficulty);

  return (
    <Link
      to={`${id}`}
      state={{ exercise }}
      className="bg-white h-70 p-5 shadow rounded-2xl flex flex-col justify-between">
      <div>
        <p className="bg-sky-100 text-sky-900 inline-block px-3 rounded-lg">
          {category}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="">{duration}</p>
        <p className={`${difficultyClass} inline-block px-3 rounded-lg`}>
          {difficulty}
        </p>
      </div>
    </Link>
  );
};

export default ExerciseCard;
