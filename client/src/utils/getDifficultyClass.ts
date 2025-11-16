export const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Łatwy":
      return "bg-emerald-200 text-emerald-900";
    case "Średni":
      return "bg-amber-200 text-amber-900";
    case "Trudny":
      return "bg-rose-200 text-rose-900";
    default:
      return "bg-stone-100 text-stone-900";
  }
};
