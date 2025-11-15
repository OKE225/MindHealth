import MoodCard from "./MoodCard";

const SelectYourMood = () => {
  return (
    <div className="bg-stone-300 rounded-2xl p-5">
      <h2 className="text-2xl font-semibold">Jak się dzisiaj czujesz?</h2>
      <p className="text-stone-600">Wybierz swój aktualny nastrój</p>

      <div className="grid grid-cols-5 gap-2">
        <MoodCard name="Świetnie" />
        <MoodCard name="Dobrze" />
        <MoodCard name="Neutralnie" />
        <MoodCard name="Źle" />
        <MoodCard name="Tragicznie" />
      </div>
    </div>
  );
};

export default SelectYourMood;
