import coolEmoji from "../assets/icons8-cool-100.png"; // bg-green-700
import happyEmoji from "../assets/icons8-happy-100.png"; // bg-sky-700
import neutralEmoji from "../assets/icons8-boring-100.png"; // bg-yellow-700
import badEmoji from "../assets/icons8-sad-100.png"; // bg-orange-700
import tragicEmoji from "../assets/icons8-disappointed-100.png"; // bg-rose-700

interface Props {
  name: string;
}

const MoodCard = ({ name }: Props) => {
  let containerStyles = "";
  let iconPath = "";
  let moodNameStyles = "";

  const setMoodColors = (name: string) => {
    switch (name) {
      case "Świetnie":
        containerStyles = "bg-green-200 hover:bg-green-400/75";
        iconPath = coolEmoji;
        moodNameStyles = "text-green-900";
        break;

      case "Dobrze":
        containerStyles = "bg-sky-200 hover:bg-sky-400/75";
        iconPath = happyEmoji;
        moodNameStyles = "text-sky-900";
        break;

      case "Neutralnie":
        containerStyles = "bg-yellow-200 hover:bg-yellow-400/75";
        iconPath = neutralEmoji;
        moodNameStyles = "text-yellow-900";
        break;

      case "Źle":
        containerStyles = "bg-orange-200 hover:bg-orange-400/75";
        iconPath = badEmoji;
        moodNameStyles = "text-orange-900";
        break;

      case "Tragicznie":
        containerStyles = "bg-rose-200 hover:bg-rose-400/75";
        iconPath = tragicEmoji;
        moodNameStyles = "text-rose-900";
        break;

      default:
        containerStyles = "bg-stone-200 hover:bg-stone-400/75";
        iconPath = "";
        moodNameStyles = "";
        break;
    }
  };

  setMoodColors(name);

  return (
    <div
      className={`${containerStyles} p-10 flex flex-col items-center rounded-2xl cursor-pointer`}>
      <img src={iconPath} className="w-25 mb-2" alt="" />
      <p className={`${moodNameStyles} text-2xl font-bold`}>{name}</p>
    </div>
  );
};

export default MoodCard;
