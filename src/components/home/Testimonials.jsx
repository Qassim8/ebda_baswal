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

const testimonialData = [
  {
    id: 1,
    nameKey: "testimonial1.name",
    roleKey: "testimonial1.role",
    commentKey: "testimonial1.comment",
    image: "/images/user-1.jpg",
  },
  {
    id: 2,
    nameKey: "testimonial2.name",
    roleKey: "testimonial2.role",
    commentKey: "testimonial2.comment",
    image: "/images/user-2.jpg",
  },
  {
    id: 3,
    nameKey: "testimonial3.name",
    roleKey: "testimonial3.role",
    commentKey: "testimonial3.comment",
    image: "/images/user-3.jpg",
  },
  {
    id: 4,
    nameKey: "testimonial4.name",
    roleKey: "testimonial4.role",
    commentKey: "testimonial4.comment",
    image: "/images/user-2.jpg",
  },
  {
    id: 5,
    nameKey: "testimonial5.name",
    roleKey: "testimonial5.role",
    commentKey: "testimonial5.comment",
    image: "/images/user-3.jpg",
  },
];

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  // نستخدم State بدلاً من Refs لتجنب خطأ الـ Render
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className="py-20 bg-white relative testimonial-section"
      id="testimonials"
    >
      <div className="container mx-auto px-5">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        <div className="mt-12 relative">
          {/* أزرار التنقل المخصصة */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-30 pointer-events-none">
            <button
              ref={(node) => setPrevEl(node)}
              className="cursor-pointer pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-(--main-color) border border-rose-100 text-main shadow-md hover:bg-main hover:text-white transition-all -ml-5"
            >
              {dir === "rtl" ? (
                <ArrowRight className="text-white" />
              ) : (
                <ArrowLeft className="text-white" />
              )}
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="cursor-pointer pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-(--main-color) border border-rose-100 text-main shadow-md hover:bg-main hover:text-white transition-all -mr-5"
            >
              {dir === "rtl" ? (
                <ArrowLeft className="text-white" />
              ) : (
                <ArrowRight className="text-white" />
              )}
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{
              prevEl,
              nextEl,
            }}
            // نضمن تحديث الـ Swiper عند ربط العناصر
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
            className="pb-16"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-rose-50/40 p-8 h-92! rounded-2xl border border-(--main-color)/20 flex flex-col hover:shadow-md transition-all border-b-4 hover:border-b-main">
                  <div className="text-3xl text-(--main-color)/30 mb-4">
                    <Quote />
                  </div>
                  <p className="text-slate-600 leading-relaxed italic mb-8 grow text-sm md:text-base">
                    "{t(item.commentKey)}"
                  </p>
                  <div className="flex items-center gap-4 pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={item.image}
                        alt={t(item.nameKey)}
                        fill
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-md">
                        {t(item.nameKey)}
                      </h4>
                      <p className="text-main text-xs font-medium">
                        {t(item.roleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-5"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #a6225d !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
