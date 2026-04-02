import Breadcrumb from "@/components/Breadcrumb";
import Statistics from "@/components/home/Statistics";
import ServicesCTA from "@/components/services/CTA";
import Process from "@/components/services/Process";
import ServicesSection from "@/components/services/ServicesSection";
import { Bread } from "tabler-icons-react";

export default function Services() {
  return (
    <>
      <Breadcrumb title="الخدمات" pageName="الخدمات" />
      <ServicesSection />
      <Process />
      <Statistics />
      <ServicesCTA />
    </>
  );
}
