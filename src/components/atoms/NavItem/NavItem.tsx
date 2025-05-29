import type { FC } from "react";
import type { NavItemProps } from "./NavItem.model";
import styles from "./NavItem.module.scss";

export const NavItem: FC<NavItemProps> = ({ children, label }) => {
  return (
    <button className={styles.navItem}>
      {children}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
