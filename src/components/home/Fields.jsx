import {
  Briefcase,
  ChartBar,
  Code,
  MoodSmileBeam,
  Rocket,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

export default function Fields() {
  const t = useTranslations("Fields");

  const fieldsData = [
    {
      title: "softSkills.title",
      desc: "softSkills.description",
      icon: <MoodSmileBeam />,
      align: "right",
    },
    {
      title: "management.title",
      desc: "management.description",
      icon: <Briefcase />,
      align: "left",
    },
    {
      title: "dataAnalysis.title",
      desc: "dataAnalysis.description",
      icon: <ChartBar />,
      align: "right",
    },
    {
      title: "technicalFields.title",
      desc: "technicalFields.description",
      icon: <Code />,
      align: "left",
    },
    {
      title: "entrepreneurship.title",
      desc: "entrepreneurship.description",
      icon: <Rocket />,
      align: "right",
    },
  ];

  return (
    <section className="py-20 bg-(--second-color)" id="fields">
      <div className="container mx-auto px-3 md:px-0">
        <MainTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="py-12 relative flex flex-col items-center gap-10 md:gap-5 w-full">
          {/* Vertical Line in Center */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-(--main-color)/20 -translate-x-1/2"></div>

          {fieldsData.map((field, index) => (
            <div
              key={index}
              className={`flex w-full max-w-5xl z-10 ${
                field.align === "right" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%]">
                <div className="p-6 bg-rose-50 rounded-xl border border-rose-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col md:flex-row items-center gap-5 text-center md:text-start relative">
                  {/* Small Circle on Vertical Line */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-(--main-color) rounded-full border-4 border-white shadow-sm ${
                      field.align === "right"
                        ? "-left-[11.5%] lg:-left-[10.5%]"
                        : "-right-[11.5%] lg:-right-[10.5%]"
                    }`}
                  ></div>

                  <div className="shrink-0">
                    <div
                      className={`text-(--main-color) text-[35px] bg-white p-3 rounded-lg shadow-sm`}
                    >
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
          ))}
        </div>
      </div>
    </section>
  );
}
