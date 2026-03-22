import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-3 md:px-0">
        <div className="pt-5 flex flex-col md:flex-row justify-between items-center md:gap-5">
          <div className="relative flex-1 order-last md:order-first">
            <div className="absolute top-24 md:top-32 md:right-40 z-10 border-8 md:border-20 border-white rounded-md w-full md:w-[70%]">
              <Image
                src="/images/Consulting-1024x644.jpg"
                alt="about"
                width={600}
                height={400}
                className="w-full rounded-md overflow-hidden"
              />
            </div>
            <div className="h-full mt-64 md:me-64 border-0 border-white rounded-md z-10 relative w-[70%] md:w-1/2">
              <Image
                src="/images/Planning-for-New-Financial-Year.png"
                alt="about"
                width={400}
                height={300}
                className="w-full rounded-md overflow-hidden"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-10">
              <h1 className="w-fit bg-pink-100 text-pink-600 text-sm font-bold px-5 py-1 rounded-md mb-3">
                من نحن؟
              </h1>
              <p className="text-slate-800 font-bold text-3xl">
                نحن إجابتك الأولى ونسعى أن نكون المنصة الأولى التي يلجأ إليها
                الطلاب والخريجين
              </p>
            </div>
            <p className="text-slate-600 text-lg space-y-3">
              <span className="text-pink-600 font-bold">منصة ابدأ بسؤال</span>{" "}
              هي منصة تدريب وتأهيل شبابية تهدف الى رفع الوعي وتطوير المهارات في
              مجتمع الشباب مع تركيز خاص على الطلاب الجامعيين وحديثي التخرج تعمل
              المنصة على سد الفجوة والنقص بين التعليم الجامعي والحياة المهنية...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
