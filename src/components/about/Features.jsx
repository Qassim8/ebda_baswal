import { Book2, Rocket, School } from "tabler-icons-react";
import MainTitle from "../MainTitle";

const featureData = [
  {
    title: "الخبرة المباشرة والشخصية",
    description:
      "مؤسسو المنصة عاشوا تجربة الانتقال من التعليم الجامعي إلى الحياة المهنية، مما يمنحهم فهمًا عميقًا للتحديات ويجعلهم قادرين على تقديم الإرشاد المناسب.",
    icon: <School />,
    bg: "bg-[#fff6fa]",
  },
  {
    title: "البرامج الشاملة والفعّالة",
    description:
      "نقدم برامج تدريبية متكاملة صُممت خصيصًا لسد الفجوة بين التعليم والعمل، بالاعتماد على خبرات المؤسسين وأفضل الممارسات العالمية.",
    icon: <Book2 />,
    bg: "bg-[#fdf3f8]",
  },
  {
    title: "التركيز على التمكين العملي",
    description:
      "نزوّد الشباب بالمعرفة والمهارات اللازمة للنجاح المهني عبر التدريب العملي والمحتوى الرقمي وورش العمل التفاعلية.",
    icon: <Rocket />,
    bg: "bg-[#fff6fa]",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-5">
        {/* استخدام المكون الموحد للعناوين */}
        <MainTitle
          title="لماذا ابدأ بسؤال؟"
          subtitle="نثق بأن كل سؤال هو بداية رحلة نحو المعرفة، وكل معرفة هي خطوة نحو تحقيق الأحلام."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featureData.map((item, index) => (
            <div
              key={index}
              className={`p-10 rounded-2xl shadow-sm border border-rose-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${item.bg} group`}
            >
              <div className="mb-6 text-main text-5xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-sm">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-4 text-slate-800 group-hover:text-main transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
