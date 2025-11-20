interface MoodEntry {
  date: string;
  mood: string;
}

export const calculateMoodStreak = (moods: MoodEntry[]) => {
  if (moods.length === 0) {
    return 0;
  }

  const sortedMoods = [...moods].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const lastStreakDay = new Date(sortedMoods[0].date);
  const currentDate = new Date();

  const dayDiff = (date1: Date, date2: Date) => {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diffTime = d2.getTime() - d1.getTime();
    return diffTime / (1000 * 60 * 60 * 24);
  };

  const daysSinceLastStreak = dayDiff(lastStreakDay, currentDate);

  if (daysSinceLastStreak > 2) {
    return 0;
  } else {
    let streakCount = 1;
    const checkDate = new Date(lastStreakDay);

    for (let i = 1; i < sortedMoods.length; i++) {
      checkDate.setDate(checkDate.getDate() - 1);
      const moodDate = new Date(sortedMoods[i].date);

      if (
        moodDate.getFullYear() === checkDate.getFullYear() &&
        moodDate.getMonth() === checkDate.getMonth() &&
        moodDate.getDate() === checkDate.getDate()
      ) {
        streakCount++;
      } else {
        break;
      }
    }
    return streakCount;
  }
};
