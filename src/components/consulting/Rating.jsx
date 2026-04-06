"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainTitle from "../MainTitle";
import { ArrowLeft, ArrowRight, Quote } from "tabler-icons-react";
import { useTranslations } from "next-intl";

const testimonialsData = [
  { id: 1, gender: "female", key: "testimonial1" },
  { id: 2, gender: "male", key: "testimonial2" },
  { id: 3, gender: "female", key: "testimonial3" },
  { id: 4, gender: "male", key: "testimonial4" },
];

export default function Testimonials({ dir }) {
  const t = useTranslations("Rating");
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // روابط صور افتراضية من DiceBear (مكتبة أفاتار مشهورة)
  const avatarImages = {
    female:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah&backgroundColor=d1d5db",
    male: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed&backgroundColor=d1d5db",
  };

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute top-0 right-10 w-80 h-80 bg-(--main-color)/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5 relative z-10">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        <div className="mt-16 relative group">
          {/* أزرار التنقل */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-30 pointer-events-none px-2">
            <button
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer pointer-events-auto w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm border border-rose-100 text-(--main-color) shadow-lg hover:bg-(--main-color) hover:text-white transition-all -ml-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4"
            >
              {dir === "rtl" ? (
                <ArrowRight size={20} />
              ) : (
                <ArrowLeft size={20} />
              )}
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="cursor-pointer pointer-events-auto w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm border border-rose-100 text-(--main-color) shadow-lg hover:bg-(--main-color) hover:text-white transition-all -mr-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4"
            >
              {dir === "rtl" ? (
                <ArrowLeft size={20} />
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{ prevEl, nextEl }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevEl;
              swiper.params.navigation.nextEl = nextEl;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20 !flex !items-stretch"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex mb-10">
                {/* هنا تم تطبيق min-h-72 و flex-col h-full لتوحيد الشكل */}
                <div className="min-h-72 w-full bg-white p-10 rounded-[2.5rem] border border-rose-200 flex flex-col h-full hover:shadow-2xl hover:border-(--main-color)/50 transition-all duration-500 group relative overflow-hidden border-b-4 hover:border-b-main">
                  <div className="absolute -top-4 -right-2 text-(--main-color)/10 transition-colors group-hover:text-(--main-color)/20">
                    <Quote size={80} fill="currentColor" />
                  </div>

                  <p className="text-slate-600 leading-loose italic mb-10 grow text-sm md:text-base relative z-10">
                    "{t(`${item.key}.comment`)}"
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-slate-50 relative z-10">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-rose-50">
                      <img
                        src={avatarImages[item.gender]}
                        alt={t(`${item.key}.name`)}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-lg group-hover:text-(--main-color) transition-colors">
                        {t(`${item.key}.name`)}
                      </h4>
                      <p className="text-(--main-color) text-xs font-semibold uppercase tracking-wider">
                        {t(`${item.key}.role`)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-10 relative z-20"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-wrapper {
          display: flex !important;
        }
        .custom-pagination .swiper-pagination-bullet {
          background: #fecdd3;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.4s ease-in-out;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #a6225d !important;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
