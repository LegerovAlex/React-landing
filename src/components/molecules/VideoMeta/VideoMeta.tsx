import type { FC } from "react";
import styles from "./VideoMeta.module.scss";
import type { VideoMetaProps } from "./VideoMeta.model";
import { ArrowIcon } from "@/static";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/const/breakpoints";

export const VideoMeta: FC<VideoMetaProps> = ({ title, views }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <div className={styles.meta}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{title}</h1>
        {isMobile && <ArrowIcon />}
      </div>
      <span className={styles.views}>{views}</span>
    </div>
  );
};
