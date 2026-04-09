import { generatePageMetadata } from "@/lib/seo";
import ContactClient from "./contact-client";
import FAQSchema from "@/components/FAQSchema";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("contact", locale);
}

export default function Contact() {
  return (
    <>
      <FAQSchema />
      <ContactClient />
    </>
  );
}
