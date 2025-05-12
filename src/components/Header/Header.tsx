import React, { FC, HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import clsx from "clsx";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={clsx([styles.header, className])} {...props}>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/add-contact">Add Contact</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/email">Email</Link>
      </nav>
    </header>
  );
};
