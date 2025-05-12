import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header />", () => {
  it("renders in the dom", () => {
    render(<Header data-testid="header" />);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Header data-testid="header" />);
    expect(container).toMatchSnapshot();
  });
});
