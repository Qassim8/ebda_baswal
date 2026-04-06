"use client";
import Image from "next/image";
import { Bulb, Phone, Tools } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { IconBulbFilled } from "@tabler/icons-react";

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
            {/* 1. الصندوق الكيرفي المطور */}
            <div className="relative w-fit py-4 px-6 md:py-6 md:px-10 bg-linear-to-r from-(--main-color)/20 to-(--alt-color)/20 backdrop-blur-sm rounded-tl-[50px] rounded-br-[50px] rounded-tr-[15px] rounded-bl-[15px] shadow-md shadow-(--main-color)/20 transition-transform duration-500 hover:-translate-y-1">
              {/* 2. حاوية النصوص - موضوعة فوق الصورة بدقة */}
              <h1 className=" text-slate-800 text-[24px] md:text-[52px] leading-[1.1] font-extrabold flex items-center gap-x-5 gap-y-1">
                {/* ستايل أيقونة كيرفي ومنحوت */}
                <span className="p-2 md:p-3 bg-(--main-color) rounded-lg shadow-lg shadow-(--main-color)/30 rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 animate-glow-pulse">
                  <IconBulbFilled
                    size={30}
                    className="text-xl text-white drop-shadow-sm animate-color-fade"
                  />
                </span>

                {/* ستايل العناوين مع حماية RTL وضمان السطر الواحد */}
                <div className="flex items-baseline flex-nowrap gap-x-2 md:gap-x-4">
                  <span className="font-extrabold text-(--main-color) tracking-tighter whitespace-nowrap">
                    {t("mainTitle")}
                  </span>
                  <span className="text-slate-700 font-bold text-2xl md:text-5xl whitespace-nowrap leading-tight">
                    {t("subtitle")}
                  </span>
                </div>
              </h1>

              {/* خط منحني ناعم في الأسفل - اختياري */}
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-(--main-color)/10 rounded-full blur-[2px]"></div>
            </div>

            {/* Description */}
            <p className="py-5 md:py-10 text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 my-5">
              <Link
                href={`/${locale}/contact`}
                className="text-sm md:text-[16px] inline-flex items-center justify-center w-27 md:w-45 py-2 md:py-3 border border-slate-800 duration-300 rounded-sm hover:bg-slate-800 hover:text-[#F9D6B4]"
              >
                <Phone className="text-sm md:text-lg me-2" />
                {t("contactButton")}
              </Link>

              <Link
                href={`/${locale}/services`}
                className="text-sm md:text-[16px] inline-flex items-center justify-center w-27 md:w-45 py-2 md:py-3 bg-(--main-color) text-white duration-300 border border-transparent rounded-sm hover:bg-transparent hover:text-slate-800 hover:border-slate-800"
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
