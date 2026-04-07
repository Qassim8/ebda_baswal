"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Founder() {
  const t = useTranslations("Founder");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section className="py-24 bg-(--second-color) overflow-hidden relative">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-16">
        {/* صورة المؤسس: حركة دخول جانبية ناعمة */}
        <div
          className="md:w-1/2 relative group"
          data-aos={dir === "ltr" ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
        >
          {/* الخلفيات الديكورية مع أنميشن هوفر متفاعل */}
          <div
            className={`absolute -bottom-8 ${dir === "ltr" ? "right-8" : "left-8"} w-full h-full bg-(--alt-color)/50 rounded-[2rem] z-0 transition-all duration-700 group-hover:scale-105`}
          ></div>
          <div
            className={`absolute -bottom-5 ${dir === "ltr" ? "right-4" : "left-4"} w-full h-full border-2 border-(--main-color)/30 rounded-[2rem] z-0 transition-all duration-700 group-hover:rotate-2`}
          ></div>

          {/* الصورة الأساسية */}
          <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/founder.jpg"
              alt="Founder"
              width={700}
              height={500}
              priority // المؤسس عنصر مهم، يفضل تحميله بسرعة
              className="object-cover transform transition-transform duration-1000 group-hover:scale-110 animate-fade-grayscale"
            />
          </div>

          {/* لمسة إضافية: اقتباس صغير عائم */}
          <div
            className={`flex justify-center items-center absolute -top-4 ${dir === "ltr" ? "-right-4" : "-left-4"} z-20 bg-(--main-color) text-white px-6 py-3 rounded-full shadow-xl hidden lg:block animate-bounce`}
            style={{ animationDuration: "3s" }}
          >
            <span className="text-3xl font-serif">&ldquo;</span>
          </div>
        </div>

        {/* المحتوى الكتابي: يظهر بعد الصورة قليلاً */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos={dir === "ltr" ? "fade-left" : "fade-right"}
          data-aos-delay="300"
        >
          <div className="inline-block">
            <h4 className="text-(--main-color) font-black mb-2 tracking-widest uppercase text-sm border-b-2 border-(--main-color)/20 pb-1">
              {t("subtitle")}
            </h4>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug italic relative">
            <span className="text-(--main-color) opacity-20 text-6xl absolute -top-10 -left-4 font-serif">
              “
            </span>
            {t("quote")}
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            {t("description")}
          </p>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex flex-col">
              <div className="w-16 h-1 bg-(--main-color) mb-3 rounded-full"></div>
              <span className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">
                {t("name")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
