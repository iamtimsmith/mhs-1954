import clsx from "clsx";
import { useEffect, useRef, type HTMLAttributes, type MouseEvent } from "react";

import styles from "./styles.module.css";

export interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose: (e?: MouseEvent) => void;
  modal?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  modal,
  children,
  className,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<Element | null>(null);

  const handleClose = () => {
    onClose();
    dialogRef.current?.close();
    // Returns focus to trigger after close for accessibility
    (triggerRef.current as HTMLButtonElement)?.focus();
  };

  const handleClickBackdrop = (e?: MouseEvent) => {
    if (!e) return;

    const rect = dialogRef.current?.getBoundingClientRect();
    const isClickInDialog =
      rect &&
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isClickInDialog) handleClose();
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      handleClose();
    }
  };

  useEffect(
    () => {
      // Get the element that was clicked to open the dialog
      triggerRef.current = document.activeElement;

      if (modal && open) dialogRef.current?.showModal();
      if (open) dialogRef.current?.focus();

      if (!open) {
        handleClose();
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [dialogRef.current, open, modal]
  );

  useEffect(
    () => {
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [modal, open]
  );

  return (
    <dialog
      className={clsx([styles.dialog, className])}
      ref={dialogRef}
      onClick={modal ? handleClickBackdrop : undefined}
      open={modal ? undefined : open}
      aria-modal={modal}
      {...props}
    >
      {children}
    </dialog>
  );
};
