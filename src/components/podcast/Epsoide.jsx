"use client";
import Image from "next/image";
import { PlayerPlay, Clock, Calendar } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function FeaturedEpisode() {
  const t = useTranslations("FeaturedEpisode");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section className="py-10 md:py-20 bg-white" id="featured-podcast">
      <div className="container mx-auto px-4 md:px-5">
        {/* الحاوية الرئيسية مع أنميشن Zoom-In خفيف عند الدخول */}
        <div
          className="relative group overflow-hidden rounded-3xl md:rounded-[3rem] bg-slate-900 min-h-125 md:aspect-21/9 flex items-center shadow-2xl shadow-slate-200"
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          {/* الصورة الخلفية مع تأثير الـ Parallax البسيط عند الهوفر */}
          <Image
            src="/podcast-8.jpg"
            alt="Latest Episode"
            fill
            priority // حلقة مميزة، يفضل تحميلها فوراً
            className="object-cover opacity-40 md:opacity-50 group-hover:scale-110 transition-transform duration-2000 ease-out"
          />

          {/* التدرج اللوني - تحسين الرؤية */}
          <div
            className={`absolute inset-0 bg-linear-to-t md:bg-gradient-to-${dir === "ltr" ? "r" : "l"} from-slate-900 via-slate-900/50 to-transparent`}
          ></div>

          {/* المحتوى النصي */}
          <div className="relative z-10 p-8 md:p-20 w-full lg:w-3/4">
            {/* البادج (Live/New) */}
            <div data-aos="fade-down" data-aos-delay="400">
              <span className="bg-(--main-color) text-white text-[10px] md:text-xs font-black px-4 py-2 rounded-full mb-6 inline-flex items-center gap-3 shadow-lg shadow-(--main-color)/20 uppercase tracking-widest">
                <span className="w-2 h-2 bg-amber-300 rounded-full animate-ping"></span>
                {t("badge")}
              </span>
            </div>

            {/* العنوان بوزن ضخم وتأثير ظهور تدريجي */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                {t("title")}
              </h2>
            </div>

            {/* تفاصيل الحلقة */}
            <div
              className="flex flex-wrap items-center gap-4 md:gap-8 text-rose-100/90 mb-8 md:mb-12 text-sm md:text-lg font-medium"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8 last:border-0">
                <Clock
                  size={22}
                  className="text-(--main-color)"
                  strokeWidth={2}
                />
                <span>{t("duration")}</span>
              </div>
              <div className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8 last:border-0">
                <Calendar
                  size={22}
                  className="text-(--main-color)"
                  strokeWidth={2}
                />
                <span>{t("date")}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1 rounded-xl text-white text-xs md:text-sm font-bold uppercase tracking-tighter">
                {t("tag")}
              </div>
            </div>

            {/* الزر - تفاعلي مع الهوفر */}
            <div data-aos="fade-up" data-aos-delay="1000">
              <a
                href="https://youtu.be/EC4Ny9lLs-M?si=PPxrrZDom1XuFThK"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full md:w-fit justify-center bg-white text-slate-900 px-6 py-3 md:px-12 md:py-5 rounded-lg md:rounded-2xl font-black text-[15px] md:text-lg flex items-center gap-4 hover:bg-(--main-color) hover:text-white transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(219,39,119,0.4)] active:scale-95"
              >
                <div className="bg-slate-900 text-white p-1 rounded-full group-hover/btn:bg-white group-hover/btn:text-(--main-color) transition-colors">
                  <PlayerPlay fill="currentColor" size={18} />
                </div>
                {t("button")}
              </a>
            </div>
          </div>

          {/* لمسة جمالية: زر Play كبير وشفاف في الخلفية */}
          <div
            className={`absolute bottom-0 ${dir === "ltr" ? "right-0" : "left-0"} opacity-5 -mb-20 -mr-20 pointer-events-none`}
          >
            <PlayerPlay size={400} strokeWidth={0.5} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
