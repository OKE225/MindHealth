import { render, screen } from "@testing-library/react";
import MoodCard from "./MoodCard";
import { ApplicationContext } from "../../ApplicationContext";

test("render paragraph from component", () => {
  const mockContext = {
    setTodayMood: vitest.fn(),
    nameTodayMood: "",
    exercisesList: [],
    isLoadingExercises: false,
  };

  render(
    <ApplicationContext.Provider value={mockContext}>
      <MoodCard name="Dobrze" />
    </ApplicationContext.Provider>
  );

  const paragraph = screen.getByRole("paragraph");

  expect(paragraph).toBeInTheDocument();
});
