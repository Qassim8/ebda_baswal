"use client";
import ServicesSection from "@/components/services/ServicesSection";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Services");

  return (
    <main>
      <ServicesSection />
    </main>
  );
}
