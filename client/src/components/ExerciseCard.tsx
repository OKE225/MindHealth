import { Link } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";
import { getDifficultyClass } from "../utils/getDifficultyClass";
import { mouseClick } from "../utils/mouseClick";

const ExerciseCard = (exercise: MindfulnessExercise) => {
  const { id, title, description, category, duration, difficulty } = exercise;

  const difficultyClass = getDifficultyClass(difficulty);

  return (
    <Link
      to={`${id}`}
      state={{ exercise }}
      className="bg-white min-h-55 p-5 shadow rounded-2xl flex flex-col justify-between"
      onClick={mouseClick}>
      <div>
        <p className="bg-sky-100 text-sky-900 inline-block px-3 rounded-lg">
          {category}
        </p>
        <h3 className="text-2xl font-semibold mt-2">{title}</h3>
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-stone-500">{duration}</p>
        <p className={`${difficultyClass} inline-block px-3 rounded-lg`}>
          {difficulty}
        </p>
      </div>
    </Link>
  );
};

export default ExerciseCard;
