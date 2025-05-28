import { ToolBar } from "@/components/molecules/ToolBar/ToolBar";
import { VideoMeta } from "@/components/molecules/VideoMeta/VideoMeta";
import styles from "./VideoInfo.module.scss";
import type { FC } from "react";
import { en } from "@/localization/en";

export const VideoInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <VideoMeta title={en.video.title} views={en.video.views} />
      <ToolBar />
    </div>
  );
};
