import { generatePageMetadata } from "@/lib/seo";
import ConsultingClient from "./consulting-client";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("consulting", locale);
}

export default function Consulting() {
  return <ConsultingClient />;
}
