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

export const metadata = {
  title: "Start with a Question - Empower Your Career Journey",
  description:
    "A platform dedicated to simplifying knowledge and empowering youth through mentorship, practical guidance, and career development.",
  keywords: [
    "career development",
    "mentorship",
    "youth empowerment",
    "learning platform",
  ],
};

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
