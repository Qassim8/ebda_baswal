import { generatePageMetadata } from "@/lib/seo";
import ServicesClient from "./services-client";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("services", locale);
}

export default function Services() {
  return <ServicesClient />;
}
