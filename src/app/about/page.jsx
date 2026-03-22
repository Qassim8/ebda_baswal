import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";

export const metadata = {
  title: "من نحن - ابدأ بسؤال",
  description: "تعرف على منصة ابدأ بسؤال ورسالتنا وأهدافنا",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />

      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.35.0/tabler-icons.min.css"
        rel="stylesheet"
      />
    </>
  );
}
