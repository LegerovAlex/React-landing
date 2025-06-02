import { Button } from "@/components/atoms/Button/Button";
import type { FC } from "react";
import { Profile } from "../Profile/Profile";
import styles from "./ChannelInfo.module.scss";
import type { ChannelInfoProps } from "./СhannelInfo.model";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/const/breakpoints";
import { ProfileSize } from "../Profile/Profile.model";

export const ChannelInfo: FC<ChannelInfoProps> = ({
  date,
  description,
  subscribeText,
  imageSrc,
  toggle,
  subscribers,
  title,
}) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <Profile
          src={imageSrc}
          size={isMobile ? ProfileSize.Medium : ProfileSize.Big}
        />
        <div className={styles.content}>
          <div className={styles.header}>
            <Link to="/profile">
              <h2 className={styles.title}>{title}</h2>
            </Link>
            {isMobile ? (
              <p className={styles.subscribers}>{subscribers}</p>
            ) : (
              <p className={styles.date}>{date}</p>
            )}
          </div>
          <p className={styles.description}>{description}</p>
          <span className={styles.toggle}>{toggle}</span>
        </div>
      </div>
      <Button>{subscribeText}</Button>
    </div>
  );
};
