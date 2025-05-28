import type { FC } from "react";

import { ActionButtonList } from "@/components/molecules/ActionButtonsList/ActionButtonsList";
import { BurgerMenu } from "@/components/molecules/BurgerMenu/BurgerMenu";
import { Logo } from "@/components/molecules/Logo/Logo";
import { Profile } from "@/components/molecules/Profile/Profile";
import { Search } from "@/components/molecules/Search/Search";
import { ProfileImg } from "@/static";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brandSection}>
        <BurgerMenu />
        <Logo />
      </div>
      <div className={styles.searchSection}>
        <Search placeholder="Search" />
      </div>
      <div className={styles.userSection}>
        <ActionButtonList />
        <Profile size="small" src={ProfileImg} />
      </div>
    </div>
  );
};
