"use client";
import { IconQuote } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function Quote() {
  const t = useTranslations("Quote");

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/R.4350fb92d15d57dd7267f7ff976f5454?rik=yDIpQ6tJaflyBQ&pid=ImgRaw&r=0')",
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      {/* Content */}
      <div className="container mx-auto px-5 relative z-20 text-center max-w-4xl">
        <div className="flex flex-col items-center">
          {/* 1. أيقونة الاقتباس: تظهر بتكبير ناعم */}
          <div data-aos="zoom-in" data-aos-duration="1000">
            <IconQuote
              size={50}
              className="text-5xl text-(--alt-color) mb-6 animate-pulse"
            />
          </div>

          {/* 2. نص الاقتباس: يستخدم zoom-out ليعطي إحساس بالاتساع */}
          <h2
            className="text-white text-xl md:text-3xl font-medium leading-relaxed mb-8"
            data-aos="zoom-out"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            {t("text")}
          </h2>

          {/* 3. اسم القائل: يظهر من الأسفل بنعومة */}
          <p
            className="text-(--alt-color) text-lg md:text-xl font-bold tracking-wide"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            {t("author")}
          </p>
        </div>
      </div>
    </section>
  );
}
