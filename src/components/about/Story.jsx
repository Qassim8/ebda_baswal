import MainTitle from "../MainTitle";

const storySteps = [
  {
    year: "البداية",
    title: "فكرة صغيرة، حلم كبير",
    desc: "بدأ كل شيء بفكرة بسيطة ولدت من رحم التحديات التي يواجهها الخريجون الجدد. كانت البداية مجرد محاولات فردية للإرشاد المهني عبر منصات التواصل.",
    icon: "ti-bulb",
  },
  {
    year: "التأسيس",
    title: "فريق عمل مؤمن بالرسالة",
    desc: "اجتمع فريق صغير لكنه ملتزم، يجمعهم هدف واحد وهو سد الفجوة بين التعليم والعمل. في هذه المرحلة بدأت ملامح 'أحاديث رزان' تتشكل ككيان منظم.",
    icon: "ti-users",
  },
  {
    year: "الآن",
    title: "مبادرة متكاملة وتأثير ملموس",
    desc: "اليوم، تحولت الفكرة إلى مبادرة وطنية مكتملة، تضم برامج تدريبية، بودكاست ملهم، واستشارات فنية متخصصة تخدم آلاف الشباب.",
    icon: "ti-award",
  },
];

export default function Story() {
  return (
    <section className="py-20 bg-sec/20 relative overflow-hidden">
      <div className="container mx-auto px-5">
        <MainTitle
          title="رحلتنا"
          subtitle="كيف تحول الحلم إلى واقع يلمس حياة الآلاف"
          center={true}
        />

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
                <div className="z-20 flex items-center justify-center w-12 h-12 bg-white border-4 border-main rounded-full shadow-lg mb-4 md:mb-0">
                  <i className={`ti ${step.icon} text-main text-xl`}></i>
                </div>

                {/* محتوى الكارد */}
                <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-sm border border-rose-50 hover:shadow-xl transition-all duration-300 group">
                  <span className="text-main font-black text-xs bg-rose-50 px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">
                    {step.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-main transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* لمسة جمالية: خلفية باهتة */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-main/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
