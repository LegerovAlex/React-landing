import { MainLayout } from "@/layouts/MainLayout";
import type { FC } from "react";
import { VideoPlayerSection } from "@/components/organisms/VideoPlayerSection/VideoPlayerSection";
import { RecommendationsSection } from "@/components/organisms/RecommendationsSection/RecommendationsSection";

export const VideoPage: FC = () => {
  return (
    <MainLayout>
      <VideoPlayerSection />
      <RecommendationsSection />
    </MainLayout>
  );
};
