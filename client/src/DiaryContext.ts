import { createContext } from "react";
import type { NoteType } from "./types/Note";

interface DiaryContextType {
  notesList: NoteType[];
  addNoteToList: (note: NoteType) => void;
}

export const DiaryContext = createContext<DiaryContextType | undefined>(
  undefined
);
