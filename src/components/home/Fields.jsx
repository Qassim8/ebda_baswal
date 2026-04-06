"use client";
import {
  Briefcase,
  ChartBar,
  Code,
  MoodSmileBeam,
  Rocket,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Fields() {
  const t = useTranslations("Fields");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  const fieldsData = [
    {
      title: "softSkills.title",
      desc: "softSkills.description",
      icon: <MoodSmileBeam />,
      align: `${dir === "rtl" ? "left" : "right"}`,
    },
    {
      title: "management.title",
      desc: "management.description",
      icon: <Briefcase />,
      align: `${dir === "rtl" ? "right" : "left"}`,
    },
    {
      title: "dataAnalysis.title",
      desc: "dataAnalysis.description",
      icon: <ChartBar />,
      align: `${dir === "rtl" ? "left" : "right"}`,
    },
    {
      title: "technicalFields.title",
      desc: "technicalFields.description",
      icon: <Code />,
      align: `${dir === "rtl" ? "right" : "left"}`,
    },
    {
      title: "entrepreneurship.title",
      desc: "entrepreneurship.description",
      icon: <Rocket />,
      align: `${dir === "rtl" ? "left" : "right"}`,
    },
  ];

  return (
    <section className="py-20 bg-(--second-color) overflow-hidden" id="fields">
      <div className="container mx-auto px-3 md:px-0">
        <div data-aos="fade-down">
          <MainTitle title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div className="py-12 relative flex flex-col items-center gap-10 md:gap-5 w-full">
          {/* الخط العمودي: يظهر بحركة تمدد من الأعلى للأسفل */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-(--main-color)/20 -translate-x-1/2"
            data-aos="fade-down"
            data-aos-duration="1500"
          ></div>

          {fieldsData.map((field, index) => {
            // تحديد اتجاه الحركة بناءً على المحاذاة
            // إذا كان الكرت على اليمين، يأتي من اليمين، والعكس
            const animationSide =
              field.align === "right" ? "fade-right" : "fade-left";

            return (
              <div
                key={index}
                className={`flex w-full max-w-5xl z-10 ${
                  field.align === "right"
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
                data-aos={animationSide}
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                {/* Card */}
                <div className="w-full md:w-[45%]">
                  <div className="p-6 bg-rose-50 rounded-xl border border-rose-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col md:flex-row items-center gap-5 text-center md:text-start relative">
                    {/* الدائرة الصغيرة على الخط العمودي */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-(--main-color) rounded-full border-4 border-white shadow-sm ${
                        field.align === "right"
                          ? "-left-[11.5%] lg:-left-[10.5%]"
                          : "-right-[11.5%] lg:-right-[10.5%]"
                      }`}
                    ></div>

                    <div className="shrink-0">
                      <div className="text-(--main-color) text-[35px] bg-white p-3 rounded-lg shadow-sm">
                        {field.icon}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {t(field.title)}
                      </h3>
                      <p className="py-3 text-[15px] text-slate-600 leading-relaxed">
                        {t(field.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
