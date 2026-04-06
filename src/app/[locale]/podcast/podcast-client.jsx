"use client";
import Breadcrumb from "@/components/Breadcrumb";
import FeaturedEpisode from "@/components/podcast/Epsoide";
import PodcastPlatforms from "@/components/podcast/Platforms";
import PodcastSection from "@/components/podcast/Podcast";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const PodcastClient = () => {
  const t = useTranslations("Podcast");
  useEffect(() => {}, [t]);
  return (
    <main>
      <Breadcrumb title={t("title")} pageName={t("title")} />
      <FeaturedEpisode />
      <PodcastSection />
      <PodcastPlatforms />
    </main>
  );
};

export default PodcastClient;
