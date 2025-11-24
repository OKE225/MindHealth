import { render, screen } from "@testing-library/react";
import ChatbotUserResponse from "./ChatbotUserResponse";

test("render paragraph from component", () => {
  render(<ChatbotUserResponse message="Witaj" />);

  const paragraph = screen.getByRole("paragraph");

  expect(paragraph).toBeInTheDocument();
});
