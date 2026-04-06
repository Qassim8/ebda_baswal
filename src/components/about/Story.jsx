import { Award, Bulb, Users } from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

const storySteps = [
  {
    year: "step1.year",
    title: "step1.title",
    desc: "step1.description",
    icon: <Bulb />,
  },
  {
    year: "step2.year",
    title: "step2.title",
    desc: "step2.description",
    icon: <Users />,
  },
  {
    year: "step3.year",
    title: "step3.title",
    desc: "step3.description",
    icon: <Award />,
  },
];

export default function Story() {
  const t = useTranslations("Story");
  return (
    <section className="py-20 relative overflow-hidden" id="story">
      <div className="container mx-auto px-5">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        <div className="relative mt-16">
          {/* الخط المركزي (Vertical Line) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-(--main-color)/20 hidden md:block"></div>

          <div className="space-y-12">
            {storySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* المساحة الفارغة المقابلة للـ Card (للتوازن في الـ Grid) */}
                <div className="hidden md:block w-5/12"></div>

                {/* الدائرة المركزية (التي تقع على الخط) */}
                <div className="z-20 flex items-center justify-center w-12 h-12 bg-white border-4 border-(--main-color) rounded-full shadow-lg mb-4 md:mb-0">
                  <div className="text-(--main-color) text-xl">{step.icon}</div>
                </div>

                {/* محتوى الكارد */}
                <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-sm border border-rose-50 hover:shadow-xl transition-all duration-300 group">
                  <span className="text-(--main-color) font-black text-xs bg-rose-50 px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">
                    {t(step.year)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-(--main-color) transition-colors">
                    {t(step.title)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {t(step.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-(--main-color)/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-(--alt-color)/50 rounded-full blur-2xl -z-10 -translate-x-1/2"></div>

      <div className="absolute bottom-0 right-10 w-48 h-48 bg-(--main-color)/50 rounded-full blur-2xl -z-10 translate-y-1/3"></div>

      <div className="absolute inset-0 opacity-5 -z-10 bg-[radial-gradient(#a6225d_1px,transparent_1px)] bg-size-[20px_20px]"></div>
    </section>
  );
}
