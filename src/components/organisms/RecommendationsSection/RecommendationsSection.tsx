import { Toggle } from "@/components/atoms/Toggle/Toggle";
import { VideoList } from "@/components/molecules/VideoList/VideoList";
import { useState, type FC } from "react";
import styles from "./ReccommendationsSection.module.scss";
import { en } from "@/localization/en";

export const RecommendationsSection: FC = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{en.RecommendationsSection.title}</h2>
        <Toggle
          checked={autoplay}
          onChange={() => setAutoplay(!autoplay)}
          label={en.RecommendationsSection.label}
        />
      </div>
      <VideoList />
    </div>
  );
};
