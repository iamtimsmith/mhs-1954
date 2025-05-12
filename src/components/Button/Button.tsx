import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <div
      className={clsx([styles.button, styles[variant], className])}
      {...props}
    >
      {children}
    </div>
  );
};
