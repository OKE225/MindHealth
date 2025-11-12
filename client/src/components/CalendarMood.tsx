import { DayPicker } from "react-day-picker";
import { pl } from "react-day-picker/locale";
import "react-day-picker/style.css";

const CalendarMood = () => {
  const modifiers = {
    greatMood: [new Date(2025, 10, 10), new Date(2025, 10, 15)],
    badMood: [new Date(2025, 10, 11)],
  };

  const modifiersClassNames = {
    greatMood: "bg-green-500",
    badMood: "bg-rose-500",
  };

  return (
    <div>
      <DayPicker
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
        navLayout="around"
        locale={pl}
        animate
        mode="single"
      />
    </div>
  );
};

export default CalendarMood;
