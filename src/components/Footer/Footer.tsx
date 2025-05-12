import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Heart } from "../Heart";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <div className={clsx([styles.footer, className])} {...props}>
      This tool was built with <Heart /> by{" "}
      <a href="https://www.iamtimsmith.com">Tim Smith</a>.
    </div>
  );
};
