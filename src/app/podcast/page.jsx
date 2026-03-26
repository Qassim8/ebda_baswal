import Breadcrumb from "@/components/Breadcrumb";
import FeaturedEpisode from "@/components/podcast/Epsoide";
import PodcastPlatforms from "@/components/podcast/Platforms";
import PodcastSection from "@/components/podcast/Podcast";

export default function Podcast({ home = false }) {
  return (
    <>
      <Breadcrumb title="كلام رزان" pageName="كلام رزان" />
      <FeaturedEpisode />
      <PodcastSection />
      <PodcastPlatforms />
    </>
  );
}
