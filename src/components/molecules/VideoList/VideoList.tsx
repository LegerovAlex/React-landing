import type { FC } from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import { videoCardData } from "./VideoList.data";
import styles from "./VideoList.module.scss";

export const VideoList: FC = () => {
  return (
    <div className={styles.list}>
      {videoCardData.map(({ author, img, id, time, title, views }) => (
        <VideoCard
          key={id}
          author={author}
          img={img}
          time={time}
          title={title}
          views={views}
        />
      ))}
    </div>
  );
};
