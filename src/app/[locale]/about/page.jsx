import { generatePageMetadata } from "@/lib/seo";
import AboutClient from "./about-client";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("about", locale);
}

export default function AboutUs() {
  return <AboutClient />;
}
