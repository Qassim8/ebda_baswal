import Breadcrumb from "@/components/Breadcrumb";
import PodcastSection from "@/components/podcast/Podcast";

export default function Podcast({ home = false }) {
  return (
    <>
      <Breadcrumb title="كلام رزان" pageName="كلام رزان" />
      <PodcastSection />
    </>
  );
}
