import { render, screen } from "@testing-library/react";
import ChatbotHeader from "./ChatbotHeader";

test("render heading from component", () => {
  render(<ChatbotHeader />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
