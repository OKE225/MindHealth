import { render, screen } from "@testing-library/react";
import SectionHeaders from "./SectionHeaders";

test("render heading and paragraph from component", () => {
  render(
    <SectionHeaders
      header="Lorem"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    />
  );

  const heading = screen.getByRole("heading", { name: /lorem/i });
  const paragraph = screen.getByRole("paragraph");

  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
