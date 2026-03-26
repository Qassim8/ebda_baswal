import { Check, Rocket, Coffee, DeviceLaptop } from "tabler-icons-react";
import MainTitle from "../MainTitle";

const plans = [
  {
    title: "جلسة الاستكشاف",
    icon: <Coffee size={40} className="text-(--main-color)" />,
    price: "مجانية",
    duration: "20-30 دقيقة",
    desc: "جلسة تعارف سريعة لنفهم تحدياتك الحالية ونحدد كيف يمكن لمبادرتنا مساعدتك في خطوتك القادمة.",
    features: [
      "تحليل مبدئي للوضع المهني",
      "تحديد الثغرات الأساسية",
      "خطة تواصل مبدئية",
    ],
    buttonText: "احجز جلستك المجانية",
    featured: false,
  },
  {
    title: "خطة الطريق المهنية",
    icon: <Rocket size={40} className="text-white" />,
    price: "عرض خاص",
    duration: "60-90 دقيقة",
    desc: "جلسة استشارية عميقة نضع فيها النقاط على الحروف، نبني سيرتك الذاتية، ونجهزك لاختراق سوق العمل.",
    features: [
      "مراجعة شاملة للـ CV و LinkedIn",
      "تدريب على المقابلات الشخصية",
      "خطة عمل مكتوبة لمدة 6 أشهر",
    ],
    buttonText: "ابدأ رحلة النجاح",
    featured: true, // لتمييز الباقة الأكثر طلباً
  },
  {
    title: "التأهيل المؤسسي",
    icon: <DeviceLaptop size={40} className="text-(--main-color)" />,
    price: "حسب الطلب",
    duration: "ورش عمل",
    desc: "خدمات مخصصة للجامعات والمؤسسات لتأهيل مجموعات من الخريجين لسوق العمل بمهارات احترافية.",
    features: [
      "ورش عمل جماعية مكثفة",
      "تقييم أداء للمشاركين",
      "شهادات حضور معتمدة",
    ],
    buttonText: "تواصل معنا للمزيد",
    featured: false,
  },
];

export default function ConsultingPlans() {
  return (
    <section className="py-24 bg-[#fdfafb] relative overflow-hidden" id="plans">
      {/* خلفية جمالية */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-(--main-color)/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5">
        {/* استخدام الـ MainTitle الجاهز بتاعك */}
        <MainTitle
          title="باقات الاستشارة المهنية"
          subtitle="اختر الباقة التي تناسب مرحلتك الحالية وابدأ في رسم مستقبلك بكل ثقة."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-10 rounded-[3rem] transition-all duration-500 hover:-translate-y-3 min-h-[550px] shadow-xl shadow-rose-100/20 ${
                plan.featured
                  ? "bg-(--main-color) text-white scale-105 z-10 border-none shadow-(--main-color)/20"
                  : "bg-white text-slate-800 border border-rose-50"
              }`}
            >
              {/* شارة "الأكثر طلباً" */}
              {plan.featured && (
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  الأكثر طلباً
                </div>
              )}

              {/* الأيقونة والعنوان */}
              <div
                className={`mb-8 p-4 rounded-3xl w-fit ${plan.featured ? "bg-white/10" : "bg-rose-50"}`}
              >
                {plan.icon}
              </div>

              <h3
                className={`text-2xl font-black mb-2 ${plan.featured ? "text-white" : "text-slate-800"}`}
              >
                {plan.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black">{plan.price}</span>
                <span
                  className={`text-sm font-medium ${plan.featured ? "text-rose-100" : "text-slate-400"}`}
                >
                  / {plan.duration}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-8 grow ${plan.featured ? "text-rose-50" : "text-slate-500"}`}
              >
                {plan.desc}
              </p>

              {/* المميزات */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
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
              {/* <button
                className={`w-full py-5 rounded-2xl font-black text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-(--main-color) hover:bg-slate-800 hover:text-white shadow-lg"
                    : "bg-(--main-color) text-white hover:bg-slate-800 shadow-(--main-color)/10 shadow-lg"
                }`}
              >
                {plan.buttonText}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
