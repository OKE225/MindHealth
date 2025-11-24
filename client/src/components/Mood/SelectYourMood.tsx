import MoodCard from "./MoodCard";

const SelectYourMood = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-5 max-md:p-3">
      <h2 className="text-stone-900 text-2xl font-bold">
        Jak się dzisiaj czujesz?
      </h2>
      <p className="text-stone-600">Wybierz swój aktualny nastrój</p>

      <div className="grid grid-cols-5 gap-2 mt-5 max-md:mt-3 max-md:gap-1">
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
