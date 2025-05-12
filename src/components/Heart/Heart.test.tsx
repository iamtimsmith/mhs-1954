import { render, screen } from "@testing-library/react";
import { Heart } from "./Heart";

describe("<Heart />", () => {
  it("renders in the dom", () => {
    render(<Heart data-testid="heart" />);

    const heart = screen.getByTestId("heart");
    expect(heart).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Heart data-testid="heart" />);
    expect(container).toMatchSnapshot();
  });
});
