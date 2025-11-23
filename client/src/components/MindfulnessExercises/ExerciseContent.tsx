import type { MindfulnessExercise } from "../../types/MindfulnessExercise";
import { getDifficultyClass } from "../../utils/getDifficultyClass";
import { MdAccessTime } from "react-icons/md";

import oneMinutePause from "../../assets/mindfulness/one-minute-pause.jpg";
import stopTechnique from "../../assets/mindfulness/stop-technique.jpg";
import bodyScanMeditation from "../../assets/mindfulness/body-scan-meditation.jpg";
import breathingAwareness from "../../assets/mindfulness/breathing-awareness.jpg";
import selfCompassionMeditation from "../../assets/mindfulness/self-compassion-meditation.jpg";
import sensoryAwareness from "../../assets/mindfulness/sensory-awareness.jpg";
import walking from "../../assets/mindfulness/walking.jpg";
import progressiveMuscleRelaxation from "../../assets/mindfulness/progressive-muscle-relaxation.jpg";
import stretching from "../../assets/mindfulness/stretching.jpg";

const ExerciseContent = (exercise: MindfulnessExercise) => {
  const { imagePath, title, description, category, duration, difficulty } =
    exercise;

  const images: { [key: string]: string } = {
    "one-minute-pause.jpg": oneMinutePause,
    "stop-technique.jpg": stopTechnique,
    "body-scan-meditation.jpg": bodyScanMeditation,
    "breathing-awareness.jpg": breathingAwareness,
    "self-compassion-meditation.jpg": selfCompassionMeditation,
    "sensory-awareness.jpg": sensoryAwareness,
    "walking.jpg": walking,
    "progressive-muscle-relaxation.jpg": progressiveMuscleRelaxation,
    "stretching.jpg": stretching,
  };

  const difficultyClass = getDifficultyClass(difficulty);

  return (
    <>
      <div>
        <img src={images[imagePath]} className="w-full select-none" alt="" />
        <div className="p-5">
          <p className="bg-sky-50 text-sky-800 inline-block px-3 rounded-lg select-none">
            {category}
          </p>
          <h3 className="text-stone-900 text-2xl font-bold mt-3">{title}</h3>
          <p className="text-stone-900 line-clamp-3 mb-15">{description}</p>
        </div>
        <div className="absolute bottom-0 w-full flex justify-between items-center p-5">
          <p className="text-stone-500 flex items-center">
            <MdAccessTime className="mr-1" /> {duration}
          </p>
          <p
            className={`${difficultyClass} inline-block px-3 rounded-lg select-none`}>
            {difficulty}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExerciseContent;
