import { createContext } from "react";

interface ApplicationContextType {
  nameTodayMood: string;
  setTodayMood: (name: string) => void;
}

export const ApplicationContext = createContext<
  ApplicationContextType | undefined
>(undefined);
