"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Statistics from "@/components/home/Statistics";
import ServicesCTA from "@/components/services/CTA";
import Process from "@/components/services/Process";
import ServicesSection from "@/components/services/ServicesSection";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const ServicesClient = () => {
  const t = useTranslations("Services");
  useEffect(() => {}, [t]);
  return (
    <main>
      <Breadcrumb title={t("pageName")} pageName={t("pageName")} />
      <ServicesSection />
      <Process />
      <Statistics />
      <ServicesCTA />
    </main>
  );
};

export default ServicesClient;
