import { createContext } from "react";
import type { MindfulnessExercise } from "./types/MindfulnessExercise";

interface ApplicationContextType {
  nameTodayMood: string;
  setTodayMood: (name: string) => void;

  exercisesList: MindfulnessExercise[];
  isLoadingExercises: boolean;
}

export const ApplicationContext = createContext<
  ApplicationContextType | undefined
>(undefined);
