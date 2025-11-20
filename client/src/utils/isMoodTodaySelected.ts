interface MoodEntry {
  date: string;
  mood: string;
}

export const isMoodTodaySelected = (moods: MoodEntry[]): boolean => {
  const today = new Date().toISOString().substring(0, 10);
  return moods.some((entry) => entry.date === today);
};
