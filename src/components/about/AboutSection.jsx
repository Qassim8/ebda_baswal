// components/about/AboutSection.jsx
"use client";
import Image from "next/image";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function About({ about }) {
  const t = useTranslations("About");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className={`py-20 ${about ? "bg-(--second-color)" : "bg-white"} overflow-hidden`}
      id="about"
    >
      <div className="container mx-auto px-5 lg:px-0">
        {/* المقطع الأول: صور متداخلة + نصوص */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          {/* حاوية الصور الأولى - ستايل احترافي متداخل */}
          <div
            className="flex-1 relative w-full h-87.5 md:h-112.5 order-last lg:order-first"
            data-aos={dir === "rtl" ? "fade-left" : "fade-right"}
            data-aos-duration="1200"
          >
            {/* الصورة الخلفية */}
            <div
              className={`absolute top-0 ${dir === "rtl" ? "left-0" : "right-0"} w-[75%] h-[85%] rounded-4xl overflow-hidden`}
            >
              <Image
                src="/about02.jpg"
                alt="Professional Consultation"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* الصورة الأمامية ببرواز أبيض */}
            <div
              className={`absolute -bottom-20 ${dir === "rtl" ? "right-0" : "left-0"} w-[60%] h-[70%] rounded-4xl overflow-hidden border-15 ${about ? "border-(--second-color)" : "border-white"} z-10`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Image
                src="/about03.jpg"
                alt="Career Planning"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* محتوى النص الأول */}
          <div
            className="flex-1"
            data-aos={dir === "rtl" ? "fade-right" : "fade-left"}
            data-aos-duration="1200"
          >
            <MainTitle
              title={t("title")}
              subtitle={t("description")}
              fullwidth={1}
            />
            <p className="text-slate-600 text-sm md:text-xl leading-relaxed mt-6">
              <span className="text-(--main-color) font-extrabold text-lg md:text-2xl block mb-2">
                {t("title")}
              </span>
              {t("mainDescription")}
            </p>
          </div>
        </div>

        {/* المقطع الثاني: يظهر فقط في صفحة About */}
        {about && (
          <div className="mt-32 flex flex-col lg:flex-row justify-between items-center gap-16">
            {/* النص الإضافي */}
            <div
              className="flex-1 lg:max-w-[50%]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className={`w-20 h-1 bg-(--main-color) mb-8 rounded-full ${dir === "rtl" ? "mr-0" : "ml-0"}`}
              ></div>
              <p className="text-slate-700 text-sm md:text-xl leading-relaxed text-justify italic font-medium">
                {t("additionalDescription")}
              </p>
            </div>

            {/* حاوية الصور الثانية: ستايل Collage متداخل عكسي */}
            <div
              className="flex-1 relative w-full h-87.5 md:h-112.5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {/* الصورة الخلفية مائلة */}
              <div
                className={`absolute -top-32 ${dir === "rtl" ? "right-0" : "left-0"} w-[70%] h-[85%] rounded-[2.5rem] overflow-hidden rotate-6 hover:rotate-0 transition-transform duration-500`}
              >
                <Image
                  src="/about04.jpg"
                  alt="Workshop"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              {/* الصورة الأمامية مائلة عكس */}
              <div
                className={`absolute -bottom-10 ${dir === "rtl" ? "-left-20" : "-right-20"} w-[65%] h-[75%] rounded-[2.5rem] overflow-hidden border-8 border-(--second-color) -rotate-6 hover:rotate-0 transition-transform duration-500 z-10`}
              >
                <Image
                  src="/about01.jpg"
                  alt="Workshop"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
