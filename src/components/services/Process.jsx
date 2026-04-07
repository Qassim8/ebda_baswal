"use client";
import {
  ArrowDown,
  CalendarEvent,
  ClipboardCheck,
  Rocket,
  UserCheck,
  ChevronRight,
  ChevronLeft,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const stepsData = [
  {
    icon: <CalendarEvent size={32} strokeWidth={1.5} />,
    key: "step1",
    mainColor: "(--main-color)",
  },
  {
    icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
    key: "step2",
    mainColor: "(--main-color)",
  },
  {
    icon: <UserCheck size={32} strokeWidth={1.5} />,
    key: "step3",
    mainColor: "(--main-color)",
  },
  {
    icon: <Rocket size={32} strokeWidth={1.5} />,
    key: "step4",
    mainColor: "(--main-color)",
  },
];

export default function Process() {
  const t = useTranslations("Process");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className="py-24 bg-(--second-color) relative overflow-hidden"
      id="process"
    >
      <div className="container mx-auto px-5 relative z-10">
        <div data-aos="fade-up">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div className="relative mt-24">
          {/* الخط الرابط المطور (يظهر في الشاشات الكبيرة) */}
          <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-slate-200 z-0 overflow-hidden rounded-full">
            {/* تأثير حركة النقطة على الخط */}
            <div
              className="h-full bg-(--main-color) transition-all ease-out origin-left"
              style={{
                transitionDuration: "3000ms",
                transitionDelay: "1500ms",
              }}
              data-aos="grow-line"
              data-aos-anchor="#process"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
                // هنا السر: كل خطوة بتستنى اللي قبلها تظهر بفرق 200ms أو 300ms
                data-aos="fade-up"
                data-aos-delay={index * 500} // الخطوة الأولى 0، الثانية 250، الثالثة 500، الرابعة 750
                data-aos-duration="1000"
              >
                {/* باقي كود الخطوة (الدائرة والنصوص) كما هو */}

                <div className="relative mb-10">
                  <div
                    className={`w-24 h-24 rounded-4xl border-2 flex items-center justify-center transition-all duration-500 bg-white relative z-10 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-10 group-hover:bg-(--main-color) group-hover:text-white text-(--main-color) border-(--main-color)/20`}
                  >
                    {step.icon}
                  </div>

                  {/* رقم الخطوة */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center border-4 border-(--second-color) z-20 group-hover:bg-(--main-color) transition-colors duration-500">
                    {index + 1}
                  </div>

                  {index !== stepsData.length - 1 && (
                    <div
                      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${dir === "ltr" ? "-right-32" : "-left-32"} text-slate-800 z-0`}
                    >
                      {dir === "ltr" ? (
                        <ChevronRight size={24} />
                      ) : (
                        <ChevronLeft size={24} />
                      )}
                    </div>
                  )}
                </div>

                <div className="px-4">
                  <h3
                    className={`text-xl font-black mb-4 text-${step.mainColor} group-hover:text-(--main-color) transition-colors duration-500`}
                  >
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {t(`${step.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* إضافة Keyframe للحركة في التايلوند (تحتاج تعريفها في tailwind.config.ts أو إضافة ملف CSS) */}
      <style jsx>{`
        @keyframes lineMove {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }
        .animate-line-move {
          animation: lineMove 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
