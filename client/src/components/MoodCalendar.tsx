import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MoodCalendar = () => {
  const modifiers = {
    greatMood: [new Date(2025, 10, 11), new Date(2025, 10, 15)],
    badMood: [new Date(2025, 10, 12)],
  };

  const modifiersStyles = {
    greatMood: { backgroundColor: "bg-green-500", color: "darkgreen" },
    badMood: { backgroundColor: "pink", color: "darkred" },
  };

  return (
    <div>
      <DayPicker
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        animate
        mode="single"
      />
    </div>
  );
};

export default MoodCalendar;
