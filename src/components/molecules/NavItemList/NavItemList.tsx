import type { FC } from "react";
import styles from "./NavItemList.module.scss";
import { navItemListData } from "./NavItemList.data";
import { NavItem } from "@/components/atoms/NavItem/NavItem";

export const NavItemList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {navItemListData.map(({ icon, id, label }) => (
        <NavItem label={label} key={id}>
          {icon}
        </NavItem>
      ))}
    </div>
  );
};
