import { useLocation } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";
import NavbarWithLinks from "../components/NavbarWithLinks";
import { getDifficultyClass } from "../utils/getDifficultyClass";
import { useEffect } from "react";
import relaxedMusic from "../assets/believe-in-miracle-by-prabajithk.mp3";

const ExercisePage = () => {
  const location = useLocation();
  const exercise = location.state?.exercise as MindfulnessExercise;

  const { title, description, category, duration, difficulty, exerciseGuide } =
    exercise;

  useEffect(() => {
    const audio = new Audio(relaxedMusic);

    audio.volume = 0.1;
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const difficultyClass = getDifficultyClass(difficulty);

  return (
    <div>
      <NavbarWithLinks />
      <div className="w-[80%] mx-auto">
        <div className="bg-white p-5 rounded-2xl shadow mt-10">
          <p className="bg-sky-100 text-sky-900 inline-block px-3 rounded-lg">
            {category}
          </p>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="">{description}</p>
          <div className="flex justify-between">
            <p>{duration}</p>
            <p className={`${difficultyClass} inline-block px-3 rounded-lg`}>
              {difficulty}
            </p>
          </div>
          <div className="border-2 border-stone-200 mt-15 p-5 rounded-2xl">
            <h3 className="text-lg font-medium">Jak wykonać to zadanie?</h3>
            <ol className="list-decimal list-inside">
              {exerciseGuide.map((step: string, id: number) => (
                <li key={id} className="text-stone-600 my-2 last-of-type:my-0">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
