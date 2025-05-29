import { MainLayout } from "@/layouts/MainLayout";
import type { FC } from "react";
import { VideoPlayerSection } from "@/components/organisms/VideoPlayerSection/VideoPlayerSection";
import { RecommendationsSection } from "@/components/organisms/RecommendationsSection/RecommendationsSection";
import { NavItemList } from "@/components/molecules/NavItemList/NavItemList";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/const/breakpoints";

export const VideoPage: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <MainLayout>
      <VideoPlayerSection />
      <RecommendationsSection />
      {isMobile && <NavItemList />}
    </MainLayout>
  );
};
