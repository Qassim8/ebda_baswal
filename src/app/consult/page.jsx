import Header from "../../components/Header";
import Consultation from "../../components/Consultation";
import Footer from "../../components/Footer";

export const metadata = {
  title: "الاستشارة - ابدأ بسؤال",
  description: "احصل على استشارة مهنية من فريق ابدأ بسؤال المتخصص",
};

export default function ConsultPage() {
  return (
    <>
      <Header />
      <Consultation />
      <Footer />

      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.35.0/tabler-icons.min.css"
        rel="stylesheet"
      />
    </>
  );
}
