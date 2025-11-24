import { useLocation } from "react-router";
import type { MindfulnessExercise } from "../types/MindfulnessExercise";
import NavbarWithLinks from "../components/NavbarWithLinks";
import { useEffect } from "react";
import relaxedMusic from "../assets/sounds/believe-in-miracle-by-prabajithk.mp3";
import ExerciseContent from "../components/MindfulnessExercises/ExerciseContent";

const ExercisePage = () => {
  const location = useLocation();
  const exercise = location.state?.exercise as MindfulnessExercise;

  const { exerciseGuide } = exercise;

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

  return (
    <div>
      <NavbarWithLinks />

      <div className="max-w-275 w-[50%] max-2xl:w-[60%] max-xl:w-[65%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-[92.5%] mx-auto pb-10">
        <div className="bg-white shadow rounded-2xl mt-10 flex flex-col justify-between overflow-hidden">
          <div className="relative">
            <ExerciseContent {...exercise} />
          </div>
          <div className="border-2 border-stone-200 mt-15 max-lg:mt-10 max-sm:mt-5 p-5 max-md:p-3 m-5 max-md:m-3 rounded-2xl">
            <h3 className="text-stone-900 text-xl font-semibold">
              Jak wykonać to zadanie?
            </h3>
            <ol className="list-decimal list-inside">
              {exerciseGuide.map((step: string, id: number) => (
                <li
                  key={id}
                  className="text-stone-600 my-3 max-xl:my-2 max-lg:my-1 last-of-type:my-0">
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
