import { render, screen } from "@testing-library/react";

import { Dialog } from "./Dialog";

beforeAll(() => {
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

describe("<Dialog/>", () => {
  it("should render", () => {
    render(<Dialog open onClose={jest.fn()} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("renders html unchanged", () => {
    const {
      container: { firstChild },
    } = render(<Dialog open onClose={jest.fn()} />);

    expect(firstChild).toMatchSnapshot();
  });

  it("should render children", () => {
    render(
      <Dialog open onClose={jest.fn()}>
        Hello
      </Dialog>
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Hello");
  });

  it("should hide when `open` is set to false", () => {
    const props = { onClose: jest.fn(), "data-testid": "test-dialog" };

    const { rerender } = render(<Dialog open={true} {...props} />);

    const dialog = screen.getByTestId("test-dialog");
    expect(dialog).toBeVisible();

    rerender(<Dialog open={false} {...props} />);
    expect(dialog).not.toBeVisible();
  });

  it("should call onClose when dialog is closed", () => {
    const onClose = jest.fn();
    const { rerender } = render(<Dialog open onClose={onClose} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeVisible();

    rerender(<Dialog open={false} onClose={onClose} />);
    expect(onClose).toHaveBeenCalled();
  });

  it("should display as modal when `modal` prop is passed", () => {
    render(<Dialog open onClose={jest.fn()} modal data-testid="modal" />);
    const dialog = screen.getByTestId("modal");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });
});
