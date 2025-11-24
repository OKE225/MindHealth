import { render, screen } from "@testing-library/react";
import ChatbotBotResponse from "./ChatbotBotResponse";

test("render paragraph from component", () => {
  render(<ChatbotBotResponse message="Witaj" />);

  const paragraph = screen.getByRole("paragraph");

  expect(paragraph).toBeInTheDocument();
});
