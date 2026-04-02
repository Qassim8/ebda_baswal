"use client";
import Image from "next/image";
import { Bulb, Phone, Tools } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section
      id="home"
      className="h-screen overflow-hidden md:h-[90vh] bg-cover bg-center relative 
                 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/95 before:z-20"
      style={{ backgroundImage: "url('/shape-bg.jpg')" }}
    >
      <div className="container mx-auto h-full relative">
        <div className="absolute px-3 md:px-0 w-full md:w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Main Title */}
            <div className="relative w-fit p-3 md:p-5 bg-[#fcf4ed] rounded-md">
              <h1 className="text-slate-700 text-[22px] md:text-[55px] leading-tight">
                <div className="inline-flex w-8.75 md:w-12.5 h-8.75 md:h-12.5 bg-[#a6225b41] rounded-lg justify-center items-center me-2 md:me-5">
                  <Bulb className="text-xl md:text-4xl text-slate-800" />
                </div>
                <span className="text-(--main-color)">{t("mainTitle")}</span>{" "}
                {t("subtitle")}
              </h1>
            </div>

            {/* Description */}
            <p className="py-5 md:py-10 text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 my-5">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center w-32.5 md:w-40 py-2 md:py-3 border border-slate-800 duration-300 rounded-sm hover:bg-slate-800 hover:text-[#F9D6B4]"
              >
                <Phone className="text-sm md:text-lg me-2" />
                {t("contactButton")}
              </Link>

              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center w-32.5 md:w-40 py-2 md:py-3 bg-(--main-color) text-white duration-300 border border-transparent rounded-sm hover:!bg-transparent hover:!text-slate-800 hover:border-slate-800"
              >
                <Tools className="text-sm md:text-lg me-2" />
                {t("servicesButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
