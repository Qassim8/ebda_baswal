// components/home/About.jsx
import Image from "next/image";
import MainTitle from "../MainTitle";

export default function About({ about }) {
  return (
    <section className="py-16 bg-sec overflow-hidden" id="about">
      <div className="container mx-auto px-3 md:px-0">
        {/* الجزء الأول: الصور المتداخلة + النص */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
          {/* صور متداخلة */}
          <div className="relative flex-1 order-last md:order-first w-full min-h-100">
            <div
              className="absolute top-25 md:right-37.5 z-10 
              rounded-md w-full md:w-[70%]"
            >
              <Image
                src="/Consulting-1024x644.jpg"
                alt="إرشاد مهني"
                width={600}
                height={400}
                className="rounded-md object-cover"
              />
            </div>
            <div
              className="h-full mt-60 md:me-50
               rounded-md z-10 relative w-[70%] md:w-1/2"
            >
              <Image
                src="/Planning-for-New-Financial-Year.png"
                alt="تخطيط"
                width={400}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
          </div>

          {/* نص من نحن */}
          <div className="flex-1">
            <MainTitle
              title="من نحن؟"
              subtitle="نحن إجابتك الأولى ونسعى أن نكون المنصة الأولى التي يلجأ إليها الطلاب والخريجين"
            />
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              <span className="text-(--main-color) font-bold">
                منصة ابدأ بسؤال
              </span>{" "}
              هي منصة تدريب وتأهيل شبابية تهدف إلى رفع الوعي وتطوير المهارات في
              مجتمع الشباب مع تركيز خاص على الطلاب الجامعيين وحديثي التخرج. تعمل
              المنصة على سد الفجوة بين التعليم الجامعي والحياة المهنية.
            </p>
          </div>
        </div>
        {about && (
          <>
            {/* الجزء الثاني: نص مكمل + صورة */}
            <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex-1">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  تقدّم المنصّة برامج عملية، وورش تدريبية، وجلسات إرشاد موجّهة
                  تساعد الشباب على اكتساب الخبرات المطلوبة، وبناء مسارات مهنية
                  واضحة تمكّنهم من المنافسة بفعالية، وتحقيق أثر إيجابي في
                  مجتمعاتهم. كما تسعى المنصّة إلى خلق مجتمع تعلّم متكامل، يجمع
                  بين الطلاب والخريجين والخبراء من مختلف المجالات، لتبادل
                  المعارف، ومشاركة الخبرات، وتقديم الدعم العملي في رحلة التطوير
                  الشخصي والمهني.إلى جانب ذلك، تعمل "ابدأ بسؤال" على إتاحة الفرص
                  التطوعية، وتنظيم الفعاليات والأنشطة الهادفة، التي تمكّن الشباب
                  من توسيع شبكات علاقاتهم، وتعزيز روح المبادرة، وتنمية قدراتهم
                  على الابتكار والإبداع.
                </p>
              </div>
              <div className="flex-1 w-full">
                <Image
                  src="/about-2.jpg"
                  alt="ورش عمل"
                  width={600}
                  height={400}
                  className="rounded-md shadow-md w-full object-cover"
                />
              </div>
            </div>

            {/* الجزء الثالث: صورة + نص مكمل */}
            <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex-1 order-last md:order-first w-full">
                <Image
                  src="/about-3.jpg"
                  alt="تمكين الشباب"
                  width={600}
                  height={400}
                  className="rounded-md shadow-md w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  من خلال هذه المبادرات، تهدف "ابدأ بسؤال" إلى تمكين الشباب من
                  تحقيق إمكاناتهم الكاملة، والمساهمة بفعالية في بناء مستقبل مشرق
                  لأنفسهم ولمجتمعاتهم. نحن نؤمن بأن الاستثمار في الشباب هو
                  الاستثمار في مستقبل أفضل للجميع، ونسعى جاهدين لأن نكون شريكاً
                  موثوقاً في رحلتهم نحو النجاح والتميز
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
