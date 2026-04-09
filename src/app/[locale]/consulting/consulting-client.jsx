"use client";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/consulting/FAQ";
import ConsultingForm from "@/components/consulting/Form";
import ConsultingPlans from "@/components/consulting/Plans";
import Testimonials from "@/components/consulting/Rating";
import { useTranslations } from "next-intl";

import { useEffect } from "react";

const ConsultingClient = () => {
  const t = useTranslations("Consulting");
  useEffect(() => {}, [t]);
  return (
    <main>
      <Breadcrumb title={t("pageName")} pageName={t("pageName")} />
      <Testimonials />
      <ConsultingPlans />
      <FAQ />
      <ConsultingForm />
    </main>
  );
};

export default ConsultingClient;
