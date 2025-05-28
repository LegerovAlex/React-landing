import type { FC } from "react";
import type { VideoCardProps } from "./VideoCard.model";
import styles from "./VideoCard.module.scss";
import { Link } from "react-router-dom";

export const VideoCard: FC<VideoCardProps> = ({
  author,
  img,
  time,
  title,
  views,
}) => {
  return (
    <Link to={"/video"}>
      <div className={styles.card}>
        <div className={styles.preview}>
          <img className={styles.img} src={img} alt="Video Img" />
          <span className={styles.duration}>{time}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.views}>{views}</span>
          <span className={styles.author}>{author}</span>
        </div>
      </div>
    </Link>
  );
};
