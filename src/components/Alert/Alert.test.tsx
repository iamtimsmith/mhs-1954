import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

describe("<Alert />", () => {
  it("should render", () => {
    render(<Alert data-testid="alert" />);
    const element = screen.getByTestId("alert");
    expect(element).toBeInTheDocument();
  });

  it("should render with error color", () => {
    render(<Alert data-testid="alert" color="error" />);
    const element = screen.getByTestId("alert");
    expect(element).toHaveClass("error");
  });

  it("should render with success color", () => {
    render(<Alert data-testid="alert" color="success" />);
    const element = screen.getByTestId("alert");
    expect(element).toHaveClass("success");
  });

  it("should match the snapshot", () => {
    const { container } = render(<Alert data-testid="alert" />);
    expect(container).toMatchSnapshot();
  });
});
