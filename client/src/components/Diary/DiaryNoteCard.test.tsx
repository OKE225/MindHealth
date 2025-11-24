import { render, screen } from "@testing-library/react";
import DiaryNoteCard from "./DiaryNoteCard";

test("render 2 paragraphs from component", () => {
  render(<DiaryNoteCard content="zawartość notatki" date="2025-11-24" />);

  const paragraphs = screen.getAllByRole("paragraph");

  expect(paragraphs).toHaveLength(2);
});
