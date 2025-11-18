interface MoodEntry {
  date: string;
  mood: string;
}

const MoodStatistics = () => {
  const storedMoods = localStorage.getItem("moods");
  if (!storedMoods) return 0;

  const parseMoods = JSON.parse(storedMoods);

  const calculateStreak = () => {
    const sortedMoods = parseMoods.sort(
      (a: MoodEntry, b: MoodEntry) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    let streak = 0;
    const currentDate = new Date();

    for (const entry of sortedMoods) {
      const expectedDate = currentDate.toISOString().substring(0, 10);

      if (entry.date === expectedDate) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else if (entry.date < expectedDate) {
        break;
      }
    }

    return streak;
  };

  const calculateMostFrequentMood = () => {
    const moodsCount: { [key: string]: number } = {};

    parseMoods.forEach(({ mood }: MoodEntry) => {
      moodsCount[mood] = (moodsCount[mood] || 0) + 1;
    });

    let maxMood: string = "";
    let maxCount: number = 0;

    for (const mood in moodsCount) {
      if (moodsCount[mood] > maxCount) {
        maxCount = moodsCount[mood];
        maxMood = mood;
      }
    }

    return { moodName: maxMood, count: maxCount };
  };

  const streak = calculateStreak();
  const mostFrequentMood = calculateMostFrequentMood();

  return (
    <div>
      <p>{streak}</p>
      <p>
        {mostFrequentMood.count} - {mostFrequentMood.moodName}
      </p>
      {/* Najwięcej razy czułeś się np. Źle - przez np 3 dni */}
    </div>
  );
};

export default MoodStatistics;
