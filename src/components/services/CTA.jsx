"use client";
import { IconCalendarCheck } from "@tabler/icons-react";
import Link from "next/link";
import { Microphone2, Rocket } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ServicesCTA() {
  const t = useTranslations("CTA");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className="py-24 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/shape-bg.jpg')",
      }}
      id="cta"
    >
      <div className="absolute inset-0 bg-white/95 " />

      <div className="container mx-auto px-5 relative z-10">
        <div
          className="bg-(--main-color) rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(219,39,119,0.3)] group"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* لمسات خلفية متحركة */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-black/10 rounded-full blur-2xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            {/* المحتوى النصي */}
            <div
              className={`lg:w-2/3 text-center ${dir === "rtl" ? "lg:text-right" : "lg:text-left"}`}
            >
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-xl md:text-5xl font-black text-white mb-8 leading-tight">
                  {t("title")}
                </h2>
                <p className="text-rose-100 text-[17px] md:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
                  {t("subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {/* زرار الاستشارات */}
                <div data-aos="fade-up" data-aos-delay="400">
                  <Link
                    href="/consulting"
                    className="bg-white text-(--main-color) text-sm md:text-[16px] p-3 md:p-5 rounded-2xl font-black hover:bg-slate-900 hover:text-white hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                  >
                    <IconCalendarCheck
                      size={26}
                      className="group-hover/btn:rotate-12 transition-transform"
                    />
                    {t("consultButton")}
                  </Link>
                </div>

                {/* زرار البودكاست */}
                <div data-aos="fade-up" data-aos-delay="600">
                  <Link
                    href="/podcast"
                    className="bg-transparent border-2 border-white/40 text-white text-sm md:text-[16px] p-3 md:p-5 rounded-2xl font-black hover:bg-white hover:text-(--main-color) hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    <Microphone2 size={26} />
                    {t("podcastButton")}
                  </Link>
                </div>
              </div>
            </div>

            {/* الأيقونة الضخمة - الصاروخ */}
            <div
              className="lg:w-1/3 lg:flex justify-center order-first md:order-last"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="w-32 md:w-72 h-32 md:h-72 bg-white/10 rounded-[4rem] backdrop-blur-xl border border-white/20 flex items-center justify-center relative animate-bounce-slow shadow-inner">
                <div className="text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]">
                  <Rocket
                    strokeWidth={1}
                    className="w-20 md:w-44 h-20 md:h-44"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce-slow 5s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
