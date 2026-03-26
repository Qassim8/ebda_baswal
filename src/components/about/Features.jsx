import { Book2, Rocket, School, Spiral } from "tabler-icons-react";
import MainTitle from "../MainTitle";

const featureData = [
  {
    title: "الخبرة المباشرة والشخصية",
    description:
      "مؤسسو المنصة عاشوا تجربة الانتقال من التعليم الجامعي إلى الحياة المهنية، مما يمنحهم فهمًا عميقًا للتحديات.",
    icon: <School size={40} strokeWidth={1.5} />,
  },
  {
    title: "البرامج الشاملة والفعّالة",
    description:
      "نقدم برامج تدريبية متكاملة صُممت خصيصًا لسد الفجوة بين التعليم والعمل، بالاعتماد على أفضل الممارسات.",
    icon: <Book2 size={40} strokeWidth={1.5} />,
  },
  {
    title: "التركيز على التمكين العملي",
    description:
      "نزوّد الشباب بالمعرفة والمهارات اللازمة للنجاح المهني عبر التدريب العملي والمحتوى الرقمي التفاعلي.",
    icon: <Rocket size={40} strokeWidth={1.5} />,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-5">
        <MainTitle
          title="لماذا ابدأ بسؤال؟"
          subtitle="نثق بأن كل سؤال هو بداية رحلة نحو المعرفة."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-3xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-(--main-color)/20 hover:bg-(--main-color) shadow-sm hover:shadow-2xl"
            >
              {/* الطبقة الخلفية التي تظهر عند الـ Hover */}
              <div className="absolute top-0 left-0 w-full h-0 bg-linear-to-br from-(--main-color) to-[#db2777] group-hover:h-full transition-all duration-500 ease-in-out -z-10 opacity-0 group-hover:opacity-100"></div>

              {/* الأيقونة بتصميم دائري شفاف */}
              <div className="mb-8 w-20 h-20 rounded-2xl bg-rose-50 text-(--main-color) flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-360">
                {item.icon}
              </div>

              {/* المحتوى النصي */}
              <h3 className="font-extrabold text-2xl mb-4 text-slate-800 transition-colors duration-500 group-hover:text-white leading-tight">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base transition-colors duration-500 group-hover:text-rose-50">
                {item.description}
              </p>

              {/* عنصر ديكوري صغير يظهر في الزاوية */}
              <div className="absolute -bottom-4 -left-3 text-(--main-color)/20 group-hover:text-white transition-colors duration-500">
                <Spiral size={50} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
