import About from "@/components/about/AboutSection";
import Fields from "@/components/home/Fields";
import Goals from "@/components/home/Goals";
import HeroSection from "@/components/home/HeroSection";
import Podcast from "@/components/podcast/Podcast";
import Quote from "@/components/home/Quotes";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import ServicesSection from "@/components/services/ServicesSection";
import ConsultingForm from "@/components/consulting/Form";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Statistics home={1} />
      <ServicesSection />
      <Fields />
      <Quote />
      <Goals />
      <Podcast home={true} />
      <Testimonials />
      <ConsultingForm />
    </>
  );
}
