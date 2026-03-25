import About from "@/components/about/AboutSection";
import Consultation from "@/components/consultation/Consultation";
import Fields from "@/components/home/Fields";
import Goals from "@/components/home/Goals";
import HeroSection from "@/components/home/HeroSection";
import Podcast from "@/components/home/Podcast";
import Quote from "@/components/home/Quotes";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/services/ServicesSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Statistics />
      <Services />
      <Fields />
      <Quote />
      <Goals />
      <Podcast home={true} />
      <Testimonials />
      <Consultation />
    </>
  );
}
