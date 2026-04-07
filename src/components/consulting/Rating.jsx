"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

export default function Testimonials() {
  const t = useTranslations("Rating");
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  const avatarImages = {
    female:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah&backgroundColor=d1d5db",
    male: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed&backgroundColor=d1d5db",
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="testimonials"
    >
      {/* لمسة فنية خلفية */}
      <div className="absolute -top-10 left-10 w-96 h-96 bg-(--main-color)/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div data-aos="fade-up">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div
          className="mt-20 relative group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* أزرار التنقل - تم حل مشكلة الـ RTL هنا */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-[104%] -left-[2%] z-30 pointer-events-none">
            {/* زر "السابق" */}
            <button
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer pointer-events-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-(--main-color) shadow-xl border border-rose-50 hover:bg-(--main-color) hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0"
            >
              {dir === "rtl" ? (
                <ArrowRight size={24} />
              ) : (
                <ArrowLeft size={24} />
              )}
            </button>

            {/* زر "التالي" */}
            <button
              ref={(node) => setNextEl(node)}
              className="cursor-pointer pointer-events-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-(--main-color) shadow-xl border border-rose-50 hover:bg-(--main-color) hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0"
            >
              {dir === "rtl" ? (
                <ArrowLeft size={24} />
              ) : (
                <ArrowRight size={24} />
              )}
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            dir={dir} // ضروري جداً لـ Swiper ليعرف اتجاه السحب
            key={dir} // نقوم بعمل ري-رندر للـ Swiper عند تغيير اللغة لضمان استقرار الـ Navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto! flex">
                <div className="min-h-80 w-full bg-(--second-color) p-10 rounded-[3rem] border border-slate-100 flex flex-col h-full hover:shadow-[0_30px_60px_-15px_rgba(219,39,119,0.15)] transition-all duration-500 group relative overflow-hidden">
                  {/* أيقونة الكوت - فخمة وكبيرة */}
                  <div
                    className={`absolute -top-8 ${dir === "rtl" ? "-left-5" : "-right-5"} text-(--main-color)/10 transition-colors group-hover:text-rose-50/50`}
                  >
                    <Quote size={120} fill="currentColor" strokeWidth={0.5} />
                  </div>

                  <p className="text-slate-500 leading-relaxed italic mb-10 grow text-sm md:text-lg relative z-10 font-medium">
                    "{t(`${item.key}.comment`)}"
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-slate-50 relative z-10 mt-auto">
                    <div className="relative w-16 h-16 rounded-[1.2rem] overflow-hidden border-4 border-white shadow-lg group-hover:rotate-3 transition-transform duration-500">
                      <img
                        src={avatarImages[item.gender]}
                        alt={t(`${item.key}.name`)}
                        className="w-full h-full object-cover bg-rose-50"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 text-lg group-hover:text-(--main-color) transition-colors duration-300">
                        {t(`${item.key}.name`)}
                      </h4>
                      <p className="text-(--main-color) text-xs font-black uppercase tracking-widest">
                        {t(`${item.key}.role`)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-3 mt-5 relative z-20"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #e2e8f0;
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: var(--main-color) !important;
          width: 40px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
