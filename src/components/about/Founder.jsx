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
    <section className="py-20 bg-(--second-color) overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
        {/* صورة المؤسس مع خلفية ديكورية */}
        <div className="md:w-1/2 relative group">
          <div
            className={`absolute -bottom-8 ${dir === "ltr" ? "right-8" : "left-8"} w-full h-full bg-(--alt-color)/50 rounded-2xl z-0 group-hover:${dir === "ltr" ? "-translate-x-2" : "translate-x-2"} group-hover:-translate-y-2 transition-transform duration-500`}
          ></div>
          <div
            className={`absolute -bottom-5 ${dir === "ltr" ? "right-4" : "left-4"} w-full h-full border-2 border-(--main-color) rounded-2xl z-0 group-hover:${dir === "ltr" ? "-translate-x-2" : "translate-x-2"} group-hover:-translate-y-2 transition-transform duration-500`}
          ></div>
          <Image
            src="/founder.jpg"
            alt="Founder"
            width={700}
            height={500}
            loading="lazy"
            className="relative z-10 rounded-2xl animate-fade-grayscale shadow-xl"
          />
        </div>

        {/* المحتوى الكتابي */}
        <div className="md:w-1/2">
          <h4 className="text-(--main-color) font-bold mb-2">
            {t("subtitle")}
          </h4>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 italic leading-snug">
            "{t("quote")}"
          </h2>
          <p className="text-slate-600 mb-6 leading-loose">
            {t("description")}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-(--main-color)"></div>
            <span className="font-bold text-slate-800 uppercase tracking-widest">
              {t("name")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
