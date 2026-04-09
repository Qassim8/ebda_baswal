"use client";
import { Award, Bulb, Users } from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const storySteps = [
  {
    year: "step1.year",
    title: "step1.title",
    desc: "step1.description",
    icon: <Bulb size={24} />,
  },
  {
    year: "step2.year",
    title: "step2.title",
    desc: "step2.description",
    icon: <Users size={24} />,
  },
  {
    year: "step3.year",
    title: "step3.title",
    desc: "step3.description",
    icon: <Award size={24} />,
  },
];

export default function Story() {
  const t = useTranslations("Story");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden bg-slate-50/50"
      id="story"
    >
      {/* دوائر خلفية ناعمة لكسر حدة بياض الصفحة */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5">
        <div data-aos="fade-down">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div className="relative mt-20">
          {/* الخط المركزي - متدرج وانسيابي */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-(--main-color) via-rose-400 to-transparent hidden md:block"></div>

          <div className="space-y-20">
            {storySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* الكارد - مع أنميشن دخول جانبي معتمد على الترتيب */}
                  <div
                    className="w-full md:w-[45%] group"
                    data-aos={
                      isEven
                        ? dir === "rtl"
                          ? "fade-left"
                          : "fade-right"
                        : dir === "rtl"
                          ? "fade-right"
                          : "fade-left"
                    }
                    data-aos-duration="1000"
                  >
                    <div className="bg-white p-8 rounded-4xl shadow-sm border border-slate-100 relative transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-rose-100/50 group-hover:-translate-y-2">
                      {/* السنة كـ Badge طائر */}
                      <div
                        className={`absolute -top-4 ${isEven && dir === "ltr" ? "left-8" : "right-8"} bg-white shadow-md border border-rose-50 px-4 py-1 rounded-full`}
                      >
                        <span className="text-(--main-color) font-black text-sm tracking-tighter">
                          {t(step.year)}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-(--main-color) transition-colors flex items-center gap-3">
                        <span className="md:hidden text-(--main-color)">
                          {step.icon}
                        </span>
                        {t(step.title)}
                      </h3>

                      <p className="text-slate-500 leading-loose text-sm md:text-base font-medium">
                        {t(step.desc)}
                      </p>

                      {/* سهم صغير يشير للخط المركزي في الميديم سكرين */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-(--main-color) border-t border-l border-slate-100 transform rotate-45 -right-2`}
                      ></div>
                    </div>
                  </div>

                  {/* الدائرة المركزية - تظهر بأنميشن Zoom */}
                  <div
                    className="z-20 hidden md:flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-xl border border-rose-50 group transform transition-transform duration-500 hover:rotate-12"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div
                      className={`w-11 h-11 bg-(--main-color) rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* مساحة فارغة للتوازن */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
