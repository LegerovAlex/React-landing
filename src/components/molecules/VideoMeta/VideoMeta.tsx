import type { FC } from "react";
import styles from "./VideoMeta.module.scss";
import type { VideoMetaProps } from "./VideoMeta.model";

export const VideoMeta: FC<VideoMetaProps> = ({ title, views }) => {
  return (
    <div className={styles.meta}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.views}>{views}</span>
    </div>
  );
};
