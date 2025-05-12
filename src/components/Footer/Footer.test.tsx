import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("<Footer />", () => {
  it("should render", () => {
    render(<Footer data-testid="footer" />);
    const element = screen.getByTestId("footer");
    expect(element).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Footer data-testid="footer" />);
    expect(container).toMatchSnapshot();
  });
});
