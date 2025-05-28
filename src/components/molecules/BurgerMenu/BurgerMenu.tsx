import type { FC } from "react";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu: FC = () => {
  return (
    <button className={styles.burger}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};
