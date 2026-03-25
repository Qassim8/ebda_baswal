"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainTitle from "../MainTitle";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

const testimonials = [
  {
    id: 1,
    name: "سارة أحمد",
    role: "خريجة هندسة",
    image: "/images/user-1.jpg",
    comment:
      "المبادرة كانت نقطة تحول في مساري المهني. المهارات الناعمة اللي اتعلمتها ساعدتني جداً في أول انترفيو ليا وقدرت بفضل الله أتقبل في الوظيفة.",
  },
  {
    id: 2,
    name: "محمد خالد",
    role: "رائد أعمال شاب",
    image: "/images/user-2.jpg",
    comment:
      "البودكاست والاستشارات اللي بتقدمها د. رزان دايماً فيها خلاصة الخبرة. بجد محتوى ملهم وبيحطك على أول الطريق العملي صح.",
  },
  {
    id: 3,
    name: "ليلى حسن",
    role: "طالبة جامعية",
    image: "/images/user-3.jpg",
    comment:
      "أكتر حاجة بتميزهم هي الصدق والواقعية في طرح الحلول. مش مجرد كلام نظري، لكن خطوات عملية تقدر تطبقها من تاني يوم.",
  },
  {
    id: 2,
    name: "محمد خالد",
    role: "رائد أعمال شاب",
    image: "/images/user-2.jpg",
    comment:
      "البودكاست والاستشارات اللي بتقدمها د. رزان دايماً فيها خلاصة الخبرة. بجد محتوى ملهم وبيحطك على أول الطريق العملي صح.",
  },
  {
    id: 3,
    name: "ليلى حسن",
    role: "طالبة جامعية",
    image: "/images/user-3.jpg",
    comment:
      "أكتر حاجة بتميزهم هي الصدق والواقعية في طرح الحلول. مش مجرد كلام نظري، لكن خطوات عملية تقدر تطبقها من تاني يوم.",
  },
];

export default function Testimonials() {
  // نستخدم State بدلاً من Refs لتجنب خطأ الـ Render
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section
      className="py-20 bg-white relative testimonial-section"
      id="testimonials"
    >
      <div className="container mx-auto px-5">
        <MainTitle
          title="قالوا عن المبادرة"
          subtitle="نفخر بكوننا جزءاً من رحلة نجاح الكثير من الشباب المبدع."
          center={true}
        />

        <div className="mt-12 relative">
          {/* أزرار التنقل المخصصة */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-30 pointer-events-none">
            <button
              ref={(node) => setPrevEl(node)}
              className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-(--alt-color) border border-rose-100 text-main shadow-md hover:bg-main hover:text-white transition-all -ml-5"
            >
              <ChevronRight className="text-(--main-color)" />
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-(--alt-color) border border-rose-100 text-main shadow-md hover:bg-main hover:text-white transition-all -mr-5"
            >
              <ChevronLeft className="text-(--main-color)" />
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
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-rose-50/40 p-8 rounded-2xl border border-rose-100 flex flex-col h-full hover:shadow-md transition-all border-b-4 hover:border-b-main">
                  <i className="ti ti-quote text-3xl text-main/30 mb-4"></i>
                  <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow text-sm md:text-base">
                    "{item.comment}"
                  </p>
                  <div className="flex items-center gap-4 pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-md">
                        {item.name}
                      </h4>
                      <p className="text-main text-xs font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-2"></div>
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
