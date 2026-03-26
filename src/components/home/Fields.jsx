import {
  Briefcase,
  ChartBar,
  Code,
  MoodSmileBeam,
  Rocket,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";

const fieldsData = [
  {
    title: "المهارات الناعمة",
    icon: <MoodSmileBeam />,
    desc: "نهدف إلى سد الفجوة التي تتركها الجامعات في توفير المهارات الناعمة مثل التواصل الفعّال والقيادة.",
    align: "right", // لجهة اليمين في الـ RTL
  },
  {
    title: "الإدارة",
    icon: <Briefcase />,
    desc: "نولي اهتمامًا كبيرًا بتطوير مهارات الإدارة والقيادة وإدارة الفرق بفعالية لتلبية متطلبات الوصف الوظيفي.",
    align: "left",
  },
  {
    title: "تحليل البيانات",
    icon: <ChartBar />,
    desc: "عنصر أساسي لمساعدة الأفراد على اتخاذ قرارات مبنية على معلومات دقيقة لضمان أفضل النتائج.",
    align: "right",
  },
  {
    title: "المجالات التقنية",
    icon: <Code />,
    desc: "نركز على تعليم مهارات الذكاء الاصطناعي، تحليل المشاريع، والبرمجة لتأهيل الشباب لسوق العمل الحديث.",
    align: "left",
  },
  {
    title: "ريادة الأعمال",
    icon: <Rocket />,
    desc: "ندعم رواد الأعمال بتوفير المعرفة والموارد اللازمة والتوجيه لتحويل أفكارهم إلى واقع ملموس.",
    align: "right",
  },
];

export default function Fields() {
  return (
    <section className="py-20 bg-(--second-color)" id="fields">
      <div className="container mx-auto px-3 md:px-0">
        <MainTitle
          title="مجالاتنا"
          subtitle="نرى أن مجالات العمل ليست مجرد تخصصات، بل هي طريق لاكتشاف الذات والمساهمة في صناعة المستقبل."
        />

        <div className="py-12 relative flex flex-col items-center gap-10 md:gap-5 w-full">
          {/* الخط الرأسي في المنتصف (يظهر في الشاشات الكبيرة فقط لجمال التصميم) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-(--main-color)/20 -translate-x-1/2"></div>

          {fieldsData.map((field, index) => (
            <div
              key={index}
              className={`flex w-full max-w-5xl z-10 ${
                field.align === "right" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* الكارد */}
              <div className="w-full md:w-[45%]">
                <div className="p-6 bg-rose-50 rounded-xl border border-rose-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-col md:flex-row items-center gap-5 text-center md:text-start relative">
                  {/* الدائرة الصغيرة على الخط الرأسي */}
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
                      {field.title}
                    </h3>
                    <p className="py-3 text-[15px] text-slate-600 leading-relaxed">
                      {field.desc}
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
