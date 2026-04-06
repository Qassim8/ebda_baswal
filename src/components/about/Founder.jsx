import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Founder() {
  const t = useTranslations("Founder");
  return (
    <section className="py-20 bg-(--second-color) overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
        {/* صورة المؤسس مع خلفية ديكورية */}
        <div className="md:w-1/2 relative">
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-(--main-color) rounded-2xl z-0"></div>
          <Image
            src="/founder.jpg"
            alt="Founder"
            width={700}
            height={500}
            loading="lazy"
            className="relative z-10 rounded-2xl animate-fade-grayscale shadow-xl"
          />
        </div>

        {/* المحتوى الكتابي */}
        <div className="md:w-1/2">
          <h4 className="text-(--main-color) font-bold mb-2">
            {t("subtitle")}
          </h4>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 italic leading-snug">
            "{t("quote")}"
          </h2>
          <p className="text-slate-600 mb-6 leading-loose">
            {t("description")}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-(--main-color)"></div>
            <span className="font-bold text-slate-800 uppercase tracking-widest">
              {t("name")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
