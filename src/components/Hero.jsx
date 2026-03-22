import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden md:h-[90vh] bg-cover bg-[url('/images/shape-bg.jpg')] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/95 before:z-20">
      <div className="absolute -left-15 top-0 w-36 z-10">
        <Image
          src="/images/bg-logo-removebg-preview.png"
          alt="icon"
          width={150}
          height={150}
          className="max-w-full"
        />
      </div>
      <div className="absolute -right-15 bottom-10 w-36 z-10">
        <Image
          src="/images/bg-logo-removebg-preview.png"
          alt="icon"
          width={150}
          height={150}
          className="max-w-full"
        />
      </div>
      <div className="container mx-auto">
        <div className="absolute px-3 md:px-0 w-full md:w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative w-fit p-3 md:p-5 bg-orange-100 rounded-md">
              <h1 className="text-slate-700 text-2xl md:text-5xl">
                <div className="inline-flex w-9 md:w-12 h-9 md:h-12 bg-pink-200 rounded-lg justify-center items-center me-2 md:me-5">
                  <i className="ti ti-bulb text-xl md:text-4xl text-slate-800"></i>
                </div>
                <span className="text-pink-600">ابدأ بسؤال</span> وافتح أبواب
                المعرفة
              </h1>
            </div>
            <p className="py-5 md:py-10 text-sm md:text-lg">
              السؤال هو أول خطوة نحو الفهم والتعلّم الحقيقي. في منصة ابدأ بسؤال،
              نؤمن أن كل فكرة عظيمة تبدأ بسؤال بسيط. انضم إلينا، وكن جزءًا من
              مجتمع يتشارك الأسئلة، وينمو بالإجابات.
            </p>
            <div className="flex items-center gap-5 my-5">
              <a
                href="#consultation"
                className="inline-block w-32 md:w-40 py-2 md:py-3 border border-slate-800 duration-300 rounded-sm hover:bg-slate-800 hover:text-orange-200 text-center"
              >
                <i className="ti ti-phone text-sm md:text-lg me-2"></i>
                تواصل معنا
              </a>
              <a
                href="#services"
                className="inline-block w-32 md:w-40 py-2 md:py-3 bg-pink-600 text-orange-100 duration-300 border border-transparent rounded-sm hover:bg-transparent hover:text-slate-800 hover:border-slate-800 text-center"
              >
                <i className="ti ti-tools text-sm md:text-lg me-2"></i>
                خدماتنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
