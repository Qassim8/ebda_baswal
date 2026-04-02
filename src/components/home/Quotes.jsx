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
          {/* Quote Icon */}
          <IconQuote
            size={50}
            className="text-5xl text-(--alt-color) mb-6 animate-pulse"
          />

          <h2 className="text-white text-xl md:text-3xl font-medium leading-relaxed mb-8">
            {t("text")}
          </h2>

          <p className="text-(--alt-color) text-lg md:text-xl font-bold tracking-wide">
            {t("author")}
          </p>
        </div>
      </div>
    </section>
  );
}
