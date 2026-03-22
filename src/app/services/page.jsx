import Header from "../../components/Header";
import Services from "../../components/Services";
import Vision from "../../components/Vision";
import Footer from "../../components/Footer";

export const metadata = {
  title: "خدماتنا - ابدأ بسؤال",
  description: "اكتشف جميع خدمات منصة ابدأ بسؤال",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Services />
      <Vision />
      <Footer />

      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.35.0/tabler-icons.min.css"
        rel="stylesheet"
      />
    </>
  );
}
