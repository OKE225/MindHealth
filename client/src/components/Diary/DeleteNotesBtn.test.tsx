import { render, screen } from "@testing-library/react";
import DeleteNotesBtn from "./DeleteNotesBtn";

test("render button from component", () => {
  render(<DeleteNotesBtn />);

  const button = screen.getByRole("button", { name: /usuń/i });

  expect(button).toBeInTheDocument();
});
