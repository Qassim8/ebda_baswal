export default function Vision() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-3 md:px-0">
        <div className="mb-10 text-center">
          <div className="mx-auto md:w-1/2 text-center">
            <h1 className="w-fit mx-auto bg-pink-100 text-pink-600 text-sm font-bold px-5 py-1 rounded-md mb-3">
              رؤيتنا
            </h1>
            <p className="text-slate-800 font-bold md:text-3xl">
              نؤمن أن كل شخص يملك فضولًا داخليًا يدفعه لفهم العالم من حوله
            </p>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className="relative z-10">
            <div className="absolute -top-7 -right-7 h-20 w-20 bg-amber-50 -z-1"></div>
            <div className="p-3 md:p-10 bg-slate-800 z-40">
              <h1 className="text-lg md:text-2xl text-amber-50 font-bold">
                رسالتنا:
              </h1>
              <p className="pt-3 text-slate-200 text-sm">
                تمكين الطلاب والخريجين والباحثين من الوصول إلى إجابات موثوقة
                وواضحة...
              </p>
            </div>
          </div>
          <div className="text-center flex flex-col gap-5 p-5">
            <a
              href="#consultation"
              className="mx-auto py-3 px-6 w-1/2 border border-slate-800 relative duration-300 hover:bg-slate-800 hover:text-orange-200"
            >
              تواصل معنا
            </a>
          </div>
          <div className="relative z-10">
            <div className="absolute -bottom-7 -left-7 h-20 w-20 border -z-1"></div>
            <div className="p-3 md:p-10 bg-orange-100 z-40">
              <h1 className="text-lg md:text-2xl text-slate-800 font-bold">
                رؤيتنا:
              </h1>
              <p className="pt-3 text-slate-600 text-sm">
                نسعى لأن نكون منصة رائدة في تمكين قدرات الشباب...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
