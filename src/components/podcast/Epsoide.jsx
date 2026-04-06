import Image from "next/image";
import { PlayerPlay, Clock, Calendar } from "tabler-icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FeaturedEpisode() {
  const t = useTranslations("FeaturedEpisode");

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-5">
        {/* تغيير الـ Aspect Ratio للموبايل ليكون مريحاً أكثر */}
        <div className="relative group overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-slate-900 min-h-[450px] md:aspect-21/9 flex items-center">
          {/* الصورة الخلفية مع تحسين الـ Overlay للموبايل */}
          <Image
            src="/podcast-8.jpg"
            alt="Latest Episode"
            fill
            loading="lazy"
            className="object-cover opacity-50 md:opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          {/* تدرج لوني أغمق في الموبايل لضمان وضوح النص */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 md:via-slate-900/40 to-transparent"></div>

          {/* المحتوى النصي - Responsive Padding & Width */}
          <div className="relative z-10 p-6 md:p-16 w-full lg:w-2/3">
            <span className="bg-(--main-color) text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-ping"></span>
              {t("badge")}
            </span>

            <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight max-w-[90%] md:max-w-full">
              {t("title")}
            </h2>

            {/* تفاصيل الحلقة - تحسين المسافات في الموبايل */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-rose-100/80 mb-6 md:mb-8 text-xs md:text-base">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock size={18} className="md:w-5 md:h-5" /> {t("duration")}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar size={18} className="md:w-5 md:h-5" /> {t("date")}
              </div>
              <div className="flex items-center gap-2 text-(--main-color) bg-(--second-color)/80 px-3 py-1 rounded-2xl font-bold">
                {t("tag")}
              </div>
            </div>

            {/* الزر - Full width في الموبايل أصغر */}
            <a
              href="https://youtu.be/EC4Ny9lLs-M?si=PPxrrZDom1XuFThK"
              target="_blank"
              className="w-full md:w-fit justify-center bg-white text-slate-900 px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black flex items-center gap-3 hover:bg-(--main-color) hover:text-white transition-all duration-300 shadow-2xl active:scale-95"
            >
              <PlayerPlay
                fill="currentColor"
                size={20}
                className="md:w-6 md:h-6"
              />
              {t("button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
