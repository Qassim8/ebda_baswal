import About from "@/components/about/AboutSection";
import Features from "@/components/about/Features";
import Founder from "@/components/about/Founder";
import Story from "@/components/about/Story";
import Breadcrumb from "@/components/Breadcrumb";
import Goals from "@/components/home/Goals";
import Testimonials from "@/components/home/Testimonials";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("About");
  return (
    <>
      <Breadcrumb title={t("badge")} pageName={t("badge")} />
      <Founder />
      <Story />
      <About about={true} />
      <Features />
      <Goals about={true} />
      <Testimonials />
    </>
  );
}
