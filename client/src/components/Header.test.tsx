import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("render heading from component", () => {
  render(<Header />);

  const heading = screen.getByRole("heading", { name: /MindHealth/i });

  expect(heading).toBeInTheDocument();
});
