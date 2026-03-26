import Link from "next/link";
import MainTitle from "../MainTitle";

export default function Goals({ about }) {
  return (
    <section
      className={`py-20 ${about ? "bg-(--second-color)" : "bg-white"} overflow-hidden`}
    >
      <div className="container mx-auto px-3 md:px-0">
        {/* استخدام مكون العنوان الجاهز */}
        <MainTitle
          title="رؤيتنا"
          subtitle="نؤمن أن كل شخص يملك فضولًا داخليًا يدفعه لفهم العالم من حوله، وأن كل سؤال هو خطوة أولى نحو التطور."
          center={true}
        />

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 w-full items-center">
          {/* كارت الرسالة */}
          <div className="relative z-10">
            {/* المربع الخلفي الزخرفي */}
            <div className="absolute -top-7 -right-7 h-20 w-20 bg-(--alt-color) -z-10 rounded-sm"></div>

            <div className="p-7 md:p-10 bg-slate-800 rounded-sm shadow-xl min-h-80 flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl text-(--alt-color) font-bold mb-4">
                رسالتنا:
              </h3>
              <p className="text-slate-50 text-sm md:text-base leading-relaxed">
                تمكين الطلاب والخريجين والباحثين من الوصول إلى إجابات موثوقة
                وواضحة لكل الأسئلة التي تدور في أذهانهم في الحياة الأكاديمية
                والعملية، من خلال محتوى مبسّط، شامل، ومتاح للجميع.
              </p>
            </div>
          </div>

          {/* زر التواصل الأوسط */}
          <div className="text-center flex flex-col items-center justify-center py-5">
            <Link
              href="/contact"
              className="py-3 px-8 border border-slate-800 text-slate-800 font-bold transition-all duration-300 hover:bg-slate-800 hover:text-(--alt-color) rounded-sm"
            >
              تواصل معنا
            </Link>
          </div>

          {/* كارت الرؤية */}
          <div className="relative z-10">
            {/* المربع الخلفي الزخرفي */}
            <div className="absolute -bottom-7 -left-7 h-20 w-20 border-2 border-slate-200 -z-10 rounded-sm"></div>

            <div className="p-7 md:p-10 bg-(--alt-color) rounded-sm shadow-md min-h-80 flex flex-col justify-center border border-pink-100">
              <h3 className="text-lg md:text-2xl text-slate-800 font-bold mb-4">
                رؤيتنا:
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                نسعى لأن نكون منصة رائدة في تمكين قدرات الشباب وحديثي التخرج، من
                خلال تقديم خدمات تطوير وتدريب عملية وفعالة تهدف لتزويدهم
                بالأدوات والمعرفة اللازمة للنجاح.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
