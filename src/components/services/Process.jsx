import {
  ArrowDown,
  CalendarEvent,
  ClipboardCheck,
  Rocket,
  UserCheck,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";

const steps = [
  {
    title: "حجز الموعد",
    desc: "اختر الخدمة المناسبة لك وحدد الموعد الذي يناسب جدولك عبر نظامنا السهل.",
    icon: <CalendarEvent size={32} />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "تحليل الاحتياجات",
    desc: "نقوم بدراسة ملفك الشخصي وتحدياتك المهنية قبل الجلسة لضمان أقصى استفادة.",
    icon: <ClipboardCheck size={32} />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "الجلسة التفاعلية",
    desc: "نلتقي أونلاين أو حضورياً لنعمل سوياً على حل المشكلات ورسم خارطة الطريق.",
    icon: <UserCheck size={32} />,
    color: "bg-rose-50 text-(--main-color) border-rose-100",
  },
  {
    title: "الانطلاق والمتابعة",
    desc: "لا تنتهي علاقتنا بالجلسة، بل نتابع تقدمك ونزودك بالموارد اللازمة لنجاحك.",
    icon: <Rocket size={32} />,
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-(--second-color) relative overflow-hidden">
      <div className="container mx-auto px-5">
        <MainTitle
          title="كيف نبدأ رحلتك؟"
          subtitle="خطوات بسيطة ومدروسة تأخذك من حيث أنت الآن إلى حيث تطمح أن تكون."
          center={true}
        />

        <div className="relative mt-20">
          {/* الخط الرابط بين الخطوات (يظهر في الشاشات الكبيرة فقط) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5  bg-dashed border-t-2 border-dashed border-slate-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* الدائرة والأيقونة مع رقم الخطوة */}
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-(--main-color)/10 bg-white relative z-10 ${step.color}`}
                  >
                    {step.icon}
                  </div>

                  {/* رقم الخطوة كـ Badge صغير */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center border-4 border-white z-20">
                    0{index + 1}
                  </span>
                </div>

                {/* النصوص */}
                <h3 className="text-xl font-extrabold text-(--main-color) md:text-slate-800 mb-4 group-hover:text-(--main-color) transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm px-4">
                  {step.desc}
                </p>

                {/* سهم صغير للموبايل والتابلت يظهر تحت كل خطوة ما عدا الأخيرة */}
                {index !== steps.length - 1 && (
                  <div className="mt-8 lg:hidden text-(--main-color)">
                    <ArrowDown size={32} className="animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
