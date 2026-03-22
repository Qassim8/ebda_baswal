import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Vision from "../components/Vision";
import Stats from "../components/Stats";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Vision />
      <Stats />
      <Consultation />
      <Footer />

      {/* Load Tabler Icons CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.35.0/tabler-icons.min.css"
        rel="stylesheet"
      />
    </>
  );
}
