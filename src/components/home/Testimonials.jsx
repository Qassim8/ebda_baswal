"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainTitle from "../MainTitle";
import { ArrowLeft, ArrowRight, Quote } from "tabler-icons-react";
import { useTranslations } from "next-intl";

// ... (testimonialData stays the same)
const testimonialData = [
  {
    id: 1,
    nameKey: "testimonial1.name",
    roleKey: "testimonial1.role",
    commentKey: "testimonial1.comment",
    image: "/testi-01.png",
  },
  {
    id: 2,
    nameKey: "testimonial2.name",
    roleKey: "testimonial2.role",
    commentKey: "testimonial2.comment",
    image: "/testi-02.png",
  },
  {
    id: 3,
    nameKey: "testimonial3.name",
    roleKey: "testimonial3.role",
    commentKey: "testimonial3.comment",
    image: "/testi-03.png",
  },
  {
    id: 4,
    nameKey: "testimonial4.name",
    roleKey: "testimonial4.role",
    commentKey: "testimonial4.comment",
    image: "/testi-04.png",
  },
  {
    id: 5,
    nameKey: "testimonial5.name",
    roleKey: "testimonial5.role",
    commentKey: "testimonial5.comment",
    image: "/testi-05.png",
  },
  {
    id: 6,
    nameKey: "testimonial6.name",
    roleKey: "testimonial6.role",
    commentKey: "testimonial6.comment",
    image: "/testi-06.png",
  },
  {
    id: 7,
    nameKey: "testimonial7.name",
    roleKey: "testimonial7.role",
    commentKey: "testimonial7.comment",
    image: "/testi-07.png",
  },
  {
    id: 8,
    nameKey: "testimonial8.name",
    roleKey: "testimonial8.role",
    commentKey: "testimonial8.comment",
    image: "/testi-08.png",
  },
  {
    id: 9,
    nameKey: "testimonial9.name",
    roleKey: "testimonial9.role",
    commentKey: "testimonial9.comment",
    image: "/testi-09.png",
  },
];

// ... (نفس الـ Imports والـ Data)

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className="py-20 bg-white relative testimonial-section overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto px-5">
        <div data-aos="fade-down" data-aos-duration="1000">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div
          className="mt-20 relative"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          {/* أزرار التنقل */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-30 pointer-events-none px-2">
            <button
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-(--main-color) text-(--main-color) shadow-xl hover:bg-(--main-color) hover:text-white transition-all -ml-6"
            >
              {dir === "rtl" ? (
                <ArrowRight size={24} />
              ) : (
                <ArrowLeft size={24} />
              )}
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="cursor-pointer pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-(--main-color) text-(--main-color) shadow-xl hover:bg-(--main-color) hover:text-white transition-all -mr-6"
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
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
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
            className="pb-20 overflow-visible!"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-96 bg-white pt-16 pb-10 px-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
                  {/* الصورة: كبيرة وبارزة للأعلى */}
                  <div className="absolute -top-12 left-1/2 md:-translate-x-1/2 w-24 h-24 md:w-30 md:h-30 rounded-3xl overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0">
                    <Image
                      src={item.image}
                      alt={t(item.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* علامة الاقتباس الخلفية */}
                  <div className="absolute top-6 right-8 opacity-5 text-slate-900 group-hover:opacity-50 group-hover:text-(--main-color) transition-opacity">
                    <Quote size={60} fill="currentColor" />
                  </div>

                  {/* الاسم والدور */}
                  <div className="my-6">
                    <h4 className="font-black text-slate-800 text-xl md:text-2xl mb-1">
                      {t(item.nameKey)}
                    </h4>
                    <span className="text-(--main-color) text-sm font-bold tracking-wider uppercase">
                      {t(item.roleKey)}
                    </span>
                  </div>

                  {/* التعليق */}
                  <p className="text-slate-500 leading-relaxed italic text-sm md:text-base">
                    "{t(item.commentKey)}"
                  </p>

                  {/* خط ديكوري سفلي */}
                  <div className="absolute bottom-8 w-12 h-1 bg-(--main-color)/20 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #e2e8f0;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s;
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
