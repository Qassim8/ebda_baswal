import { generatePageMetadata } from "@/lib/seo";
import PodcastClient from "./podcast-client";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("podcast", locale);
}

export default function Podcast() {
  return <PodcastClient />;
}
