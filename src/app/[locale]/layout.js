import { Almarai, Comfortaa, Exo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/navigation";
import { notFound } from "next/navigation";

const exo2 = Comfortaa({
  variable: "--font-exo2",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

// Generate metadata function for locale-specific SEO
export async function generateMetadata({ params }) {
  const { locale } = await params;

  const seoData = {
    en: {
      title: "Start with a Question - Empower Your Career Journey",
      description:
        "A platform dedicated to simplifying knowledge and empowering youth through mentorship, practical guidance, and career development.",
      keywords: [
        "career development",
        "mentorship",
        "youth empowerment",
        "learning platform",
        "professional growth",
        "career coaching",
      ],
      siteUrl: "https://yoursite.com",
      ogTitle: "Start with a Question - Empower Your Career Journey",
      ogDescription:
        "A platform dedicated to simplifying knowledge and empowering youth through mentorship, practical guidance, and career development.",
      ogImage: "https://yoursite.com/og-image.png",
      twitterHandle: "@yourhandle",
    },
    ar: {
      title: "ابدأ بسؤال - اختبر كفاءاتك المهنية",
      description:
        "منصة تهدف إلى تبسيط المعرفة، وتحفيز التفكير، وتمكين الشباب من خلال مشاركة المحتوى والإرشاد العملي لبناء مسارات مهنية ناجحة.",
      keywords: [
        "تطوير مهني",
        "الارشاد",
        "تمكين الشباب",
        "منصة تعليم",
        "النمو الوظيفي",
        "استشارات مهنية",
      ],
      siteUrl: "https://yoursite.com",
      ogTitle: "ابدأ بسؤال - اختبر كفاءاتك المهنية",
      ogDescription:
        "منصة تهدف إلى تبسيط المعرفة، وتحفيز التفكير، وتمكين الشباب من خلال مشاركة المحتوى والإرشاد العملي لبناء مسارات مهنية ناجحة.",
      ogImage: "https://yoursite.com/og-image-ar.png",
      twitterHandle: "@yourhandle",
    },
  };

  const currentSeo = seoData[locale] || seoData.en;

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    keywords: currentSeo.keywords,
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    language: locale,
    charset: "utf-8",
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: currentSeo.siteUrl,
      title: currentSeo.ogTitle,
      description: currentSeo.ogDescription,
      image: {
        url: currentSeo.ogImage,
        width: 1200,
        height: 630,
        alt: currentSeo.ogTitle,
      },
      siteName: "Start with a Question",
    },
    twitter: {
      card: "summary_large_image",
      title: currentSeo.ogTitle,
      description: currentSeo.ogDescription,
      image: currentSeo.ogImage,
      creator: currentSeo.twitterHandle,
    },
    alternateLanguages: [
      { hrefLang: "en", href: `${currentSeo.siteUrl}/en` },
      { hrefLang: "ar", href: `${currentSeo.siteUrl}/ar` },
      { hrefLang: "x-default", href: currentSeo.siteUrl },
    ],
    canonical: `${currentSeo.siteUrl}/${locale}`,
  };
}

// Generate static routes for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  // Fetch translation messages for this locale
  let messages;

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Determine page direction and language
  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontVariables =
    locale === "en" ? `${exo2.variable}` : `${almarai.variable}`;

  return (
    <html
      lang={locale}
      dir={direction}
      data-locale={locale}
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
