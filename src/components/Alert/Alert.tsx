import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  color?: "error" | "success";
}

export const Alert: FC<AlertProps> = ({
  children,
  className,
  color = "error",
  ...props
}) => {
  return (
    <div className={clsx([styles.alert, styles[color], className])} {...props}>
      {children}
    </div>
  );
};
