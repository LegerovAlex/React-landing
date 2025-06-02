import type { FC } from "react";
import { ActionButtonList } from "@/components/molecules/ActionButtonsList/ActionButtonsList";
import { BurgerMenu } from "@/components/molecules/BurgerMenu/BurgerMenu";
import { Logo } from "@/components/molecules/Logo/Logo";
import { Profile } from "@/components/molecules/Profile/Profile";
import { Search } from "@/components/molecules/Search/Search";
import { MoreVerticalIcon, ProfileImg, SearchIcon } from "@/static";

import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/const/breakpoints";
import { ProfileSize } from "@/components/molecules/Profile/Profile.model";

export const Header: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <div className={styles.header}>
      <div className={styles.brandSection}>
        <BurgerMenu />
        <Logo />
      </div>
      <div className={styles.searchSection}>
        {isMobile ? <SearchIcon /> : <Search placeholder="Search" />}
      </div>
      <div className={styles.userSection}>
        {isMobile ? (
          <MoreVerticalIcon />
        ) : (
          <>
            <ActionButtonList />
            <Profile size={ProfileSize.Small} src={ProfileImg} />
          </>
        )}
      </div>
    </div>
  );
};
