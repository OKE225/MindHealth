import { useLocation } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";
import NavbarWithLinks from "../components/NavbarWithLinks";

const ExercisePage = () => {
  const location = useLocation();
  const exercise = location.state?.exercise as MindfulnessExercise;

  const { title, description, category, duration, difficulty, exerciseGuide } =
    exercise;

  return (
    <div>
      <NavbarWithLinks />
      <div className="w-[80%] mx-auto">
        <div className="bg-white p-5 rounded-2xl mt-10">
          <p className="bg-sky-200 inline-block px-3 rounded-2xl">{category}</p>
          <h3 className="text-2xl">{title}</h3>
          <p className="">{description}</p>
          <div className="flex justify-between">
            <p>{duration}</p>
            <p className="bg-green-200 text-green-800 inline-block px-2 rounded-2xl">
              {difficulty}
            </p>
          </div>
          <ol className="list-decimal list-inside mt-15">
            {exerciseGuide.map((step: string, id: number) => (
              <li key={id}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
