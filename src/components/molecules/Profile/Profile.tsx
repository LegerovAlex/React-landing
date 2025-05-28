import type { FC } from "react";
import styles from "./Profile.module.scss";
import type { ProfileProps } from "./Profile.model";

export const Profile: FC<ProfileProps> = ({ src, size }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={src}
        alt="User Img"
        className={`${styles.avatar} ${styles[`avatar__${size}`]}  `}
      />
    </div>
  );
};
