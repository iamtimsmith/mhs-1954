import { ChangeEvent, FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  value?: string;
}

export const Input: FC<InputProps> = ({
  className,
  label,
  name,
  placeholder,
  onChange,
  type = "text",
  ...props
}) => {
  return (
    <div className={clsx([styles.input, className])} {...props}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
