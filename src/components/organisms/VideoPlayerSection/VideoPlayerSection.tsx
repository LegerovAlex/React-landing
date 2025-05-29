import { ChannelInfo } from "@/components/molecules/ChannelInfo/ChannelInfo";
import { VideoInfo } from "@/components/molecules/VideoInfo/VideoInfo";
import { VideoPlayer } from "@/components/molecules/VideoPlayer/VideoPlayer";
import { ChannelImg } from "@/static";
import { en } from "@/localization/en";
import styles from "./VideoPlayerSection.module.scss";
import type { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/const/breakpoints";

export const VideoPlayerSection: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <div className={styles.container}>
      <VideoPlayer />
      <VideoInfo />
      <ChannelInfo
        subscribers={en.channel.subscribers}
        title={en.channel.title}
        date={en.channel.date}
        description={en.channel.description}
        toggle={en.channel.toggle}
        subscribeText={
          isMobile ? en.channel.mobileSubcribe : en.channel.subscribe
        }
        imageSrc={ChannelImg}
      />
    </div>
  );
};
