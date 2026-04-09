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
import { generatePageMetadata } from "@/lib/seo";
import FAQ from "@/components/consulting/FAQ";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("home", locale);
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Statistics home={1} />
      <ServicesSection />
      <Fields />
      <Quote />
      <Goals />
      <Podcast home={true} />
      <Testimonials />
      <FAQ />
      <ConsultingForm />
    </main>
  );
}
