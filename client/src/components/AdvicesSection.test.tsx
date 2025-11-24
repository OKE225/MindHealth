import { render, screen } from "@testing-library/react";
import AdvicesSection from "./AdvicesSection";

test("render heading and paragraph from component", () => {
  render(<AdvicesSection />);

  const heading = screen.getByRole("heading");
  const paragraph = screen.getByRole("paragraph");

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
