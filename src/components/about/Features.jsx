"use client";
import { Book2, Rocket, School, Spiral } from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const featureData = [
  {
    title: "feature1.title",
    description: "feature1.description",
    icon: <School size={38} strokeWidth={1.2} />,
    delay: "100",
  },
  {
    title: "feature2.title",
    description: "feature2.description",
    icon: <Book2 size={38} strokeWidth={1.2} />,
    delay: "200",
  },
  {
    title: "feature3.title",
    description: "feature3.description",
    icon: <Rocket size={38} strokeWidth={1.2} />,
    delay: "300",
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
    <section
      className="py-24 bg-[#fcfcfc] relative overflow-hidden"
      id="features"
    >
      {/* لمسة خلفية فنية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('/grid.svg')]"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div data-aos="fade-up">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {featureData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="group relative p-10 bg-white rounded-[2.5rem] transition-all duration-700 border border-slate-100 hover:border-transparent shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(219,39,119,0.25)] flex flex-col items-start"
            >
              {/* التدرج الخلفي الذكي - ينبثق من الأسفل بنعومة */}
              <div className="absolute inset-0 bg-gradient-to-br from-(--main-color) to-[#be185d] opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2.5rem] -z-10 scale-[0.95] group-hover:scale-100"></div>

              {/* الأيقونة: تصميم Floating مع زوايا ناعمة */}
              <div className="mb-8 w-20 h-20 rounded-[1.5rem] bg-rose-50 text-(--main-color) flex items-center justify-center transition-all duration-700 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 group-hover:rotate-[10deg] shadow-inner">
                {item.icon}
              </div>

              {/* المحتوى النصي */}
              <h3 className="font-black text-2xl mb-4 text-slate-800 transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
                {t(item.title)}
              </h3>

              <p className="text-slate-500 leading-loose text-[15px] font-medium transition-all duration-500 group-hover:text-white/90">
                {t(item.description)}
              </p>

              {/* الزخرفة (Spiral): حركتها دائرية عند الهوفر */}
              <div
                className={`absolute -bottom-6 ${dir === "ltr" ? "-right-6" : "-left-6"} text-transparent group-hover:text-white/10 transition-all duration-700 group-hover:rotate-180 scale-150`}
              >
                <Spiral size={120} strokeWidth={0.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
