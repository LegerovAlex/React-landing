import type { FC } from "react";
import styles from "./VideoPlayer.module.scss";

export const VideoPlayer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://www.youtube.com/embed/Tn6-PIqc4UM"
        title="YouTube video"
        allowFullScreen
      />
    </div>
  );
};
