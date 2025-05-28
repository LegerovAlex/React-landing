import { ChannelInfo } from "@/components/molecules/ChannelInfo/ChannelInfo";
import { VideoInfo } from "@/components/molecules/VideoInfo/VideoInfo";
import { VideoPlayer } from "@/components/molecules/VideoPlayer/VideoPlayer";
import { ChannelImg } from "@/static";
import { en } from "@/localization/en";
import styles from "./VideoPlayerSection.module.scss";
import type { FC } from "react";

export const VideoPlayerSection: FC = () => {
  return (
    <div className={styles.container}>
      <VideoPlayer />
      <VideoInfo />
      <ChannelInfo
        title={en.channel.title}
        date={en.channel.date}
        description={en.channel.description}
        toggle={en.channel.toggle}
        subscribeText={en.channel.subscribe}
        imageSrc={ChannelImg}
      />
    </div>
  );
};
