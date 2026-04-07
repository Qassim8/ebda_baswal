import { Check, Rocket, Coffee, DeviceLaptop } from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

const plansData = [
  {
    icon: <Coffee size={40} className="text-(--main-color)" />,
    key: "plan1",
    featured: false,
  },
  {
    icon: <Rocket size={40} className="text-white" />,
    key: "plan2",
    featured: true,
  },
  {
    icon: <DeviceLaptop size={40} className="text-(--main-color)" />,
    key: "plan3",
    featured: false,
  },
];

export default function ConsultingPlans() {
  const t = useTranslations("Plans");

  return (
    <section
      className="py-20 bg-(--second-color) relative overflow-hidden"
      id="plans"
    >
      {/* خلفية جمالية */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-(--main-color)/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5">
        {/* أنميشن للعنوان الرئيسي */}
        <div data-aos="fade-down">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-10 rounded-[3rem] transition-transform duration-300 hover:-translate-y-3 min-h-137.5 shadow-xl shadow-rose-100/20 ${
                plan.featured
                  ? "bg-(--main-color) text-white scale-105 z-10 border-none shadow-(--main-color)/20"
                  : "bg-white text-slate-800 border border-rose-50"
              }`}
              // أنميشن فيد أب مع تأخير زمني متسلسل لكل بوكس
              data-aos="zoom-in"
              data-aos-delay={index * 400}
            >
              {/* شارة "الأكثر طلباً" */}
              {plan.featured && (
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  {t("mostDemanded")}
                </div>
              )}

              {/* الأيقونة والعنوان */}
              <div
                className={`mb-8 p-4 rounded-3xl w-fit ${plan.featured ? "bg-white/10" : "bg-rose-50"}`}
              >
                {plan.icon}
              </div>

              <h3
                className={`text-sm md:text-md font-black mb-2 ${plan.featured ? "text-white" : "text-slate-800"}`}
              >
                {t(`${plan.key}.title`)}
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="md:text-2xl font-black">
                  {t(`${plan.key}.price`)}
                </span>
                <span
                  className={`text-sm font-medium ${plan.featured ? "text-rose-100" : "text-slate-400"}`}
                >
                  / {t(`${plan.key}.duration`)}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-8 grow ${plan.featured ? "text-rose-50" : "text-slate-500"}`}
              >
                {t(`${plan.key}.description`)}
              </p>

              {/* المميزات */}
              <ul className="space-y-4 mb-10">
                {t.raw(`${plan.key}.features`).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm font-bold"
                  >
                    <div
                      className={`mt-1 ${plan.featured ? "text-white" : "text-(--main-color)"}`}
                    >
                      <Check size={18} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* زر الإجراء */}
              <button
                className={`w-full py-5 rounded-2xl font-black text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-(--main-color) hover:bg-slate-800 hover:text-white shadow-lg"
                    : "bg-(--main-color) text-white hover:bg-slate-800 shadow-(--main-color)/10 shadow-lg"
                }`}
              >
                {t(`${plan.key}.buttonText`)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
