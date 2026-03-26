import Breadcrumb from "@/components/Breadcrumb";
import Process from "@/components/services/Process";
import ServicesSection from "@/components/services/ServicesSection";
import { Bread } from "tabler-icons-react";

export default function Services() {
  return (
    <>
      <Breadcrumb title="الخدمات" pageName="الخدمات" />
      <ServicesSection />
      <Process />
    </>
  );
}
