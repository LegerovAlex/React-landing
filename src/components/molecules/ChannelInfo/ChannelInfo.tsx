import { Button } from "@/components/atoms/Button/Button";
import type { FC } from "react";
import { Profile } from "../Profile/Profile";
import styles from "./ChannelInfo.module.scss";
import type { ChannelInfoProps } from "./СhannelInfo.model";
import { Link } from "react-router-dom";

export const ChannelInfo: FC<ChannelInfoProps> = ({
  date,
  description,
  subscribeText,
  imageSrc,
  toggle,
  title,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <Profile src={imageSrc} size="big" />
        <div className={styles.content}>
          <div className={styles.header}>
            <Link to="/profile">
              <h2 className={styles.title}>{title}</h2>
            </Link>
            <p className={styles.date}>{date}</p>
          </div>
          <p className={styles.description}>{description}</p>
          <span className={styles.toggle}>{toggle}</span>
        </div>
      </div>
      <Button>{subscribeText}</Button>
    </div>
  );
};
