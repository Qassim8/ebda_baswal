"use client";
import { Book2, Rocket, School, Spiral } from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const featureData = [
  {
    title: "feature1.title",
    description: "feature1.description",
    icon: <School size={40} strokeWidth={1.5} />,
  },
  {
    title: "feature2.title",
    description: "feature2.description",
    icon: <Book2 size={40} strokeWidth={1.5} />,
  },
  {
    title: "feature3.title",
    description: "feature3.description",
    icon: <Rocket size={40} strokeWidth={1.5} />,
  },
];

export default function Features() {
  const t = useTranslations("Features");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-5">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-3xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-(--main-color)/20 hover:bg-(--main-color) shadow-sm hover:shadow-2xl"
            >
              {/* الطبقة الخلفية التي تظهر عند الـ Hover */}
              <div className="absolute top-0 left-0 w-full h-0 bg-linear-to-br from-(--main-color) to-[#db2777] group-hover:h-full transition-all duration-500 ease-in-out -z-10 opacity-0 group-hover:opacity-100"></div>

              {/* الأيقونة بتصميم دائري شفاف */}
              <div className="mb-8 w-20 h-20 rounded-2xl bg-rose-50 text-(--main-color) flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-360">
                {item.icon}
              </div>

              {/* المحتوى النصي */}
              <h3 className="font-extrabold text-2xl mb-4 text-slate-800 transition-colors duration-500 group-hover:text-white leading-tight">
                {t(item.title)}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base transition-colors duration-500 group-hover:text-rose-50">
                {t(item.description)}
              </p>

              {/* عنصر ديكوري صغير يظهر في الزاوية */}
              <div className="absolute -bottom-4 -left-3 text-(--main-color)/20 group-hover:text-white transition-colors duration-500">
                <Spiral size={50} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
