import Image from "next/image";
import { PlayerPlay, Microphone2, Clock, Calendar } from "tabler-icons-react";

export default function FeaturedEpisode() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-video md:aspect-21/9 flex items-center">
          {/* الصورة الخلفية مع Overlay مظلم */}
          <Image
            src="/podcast-8.jpg"
            alt="Latest Episode"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          {/* المحتوى النصي فوق الصورة */}
          <div className="relative z-10 p-8 md:p-16 w-full md:w-2/3">
            <span className="bg-(--main-color) text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              أحدث حلقة الآن
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              كيف تجتاز أول مقابلة وظيفية لك بكل ثقة؟
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-rose-100/80 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Clock size={20} /> 45 دقيقة
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} /> 24 مارس 2026
              </div>
              <div className="flex items-center gap-2 text-(--main-color) bg-white/10 px-3 py-1 rounded-lg">
                #تطوير_مهني
              </div>
            </div>

            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-(--main-color) hover:text-white transition-all duration-300 shadow-2xl">
              <PlayerPlay fill="currentColor" size={24} />
              استمع للحلقة الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
