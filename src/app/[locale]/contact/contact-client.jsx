"use client";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/consulting/FAQ";
import ConsultingForm from "@/components/consulting/Form";
import { ContactCards } from "@/components/contact/ContactInfo";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const ContactClient = () => {
  const t = useTranslations("Contact");
  useEffect(() => {}, [t]);
  return (
    <main>
      <Breadcrumb title={t("pageName")} pageName={t("title")} />
      <ContactCards />
      <FAQ contact={true} />
      <ConsultingForm mode="." />
    </main>
  );
};

export default ContactClient;
