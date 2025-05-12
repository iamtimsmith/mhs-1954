import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

const props = {
  label: "Test Label",
  name: "testName",
  placeholder: "Test Placeholder",
  onChange: jest.fn(),
  type: "text" as "text" | "number" | "email",
  value: "Test Value",
};

describe("<Input />", () => {
  it("should render", () => {
    render(<Input {...props} data-testid="input" />);
    const element = screen.getByTestId("input");
    expect(element).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Input {...props} />);
    expect(container).toMatchSnapshot();
  });
});
