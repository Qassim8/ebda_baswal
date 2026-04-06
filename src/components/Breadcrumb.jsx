import Link from "next/link";
import { ChevronLeft, Home2 } from "tabler-icons-react";
import { useTranslations } from "next-intl";

export default function Breadcrumb({ title, pageName }) {
  const t = useTranslations("Breadcrumb");
  return (
    <section
      className="h-[30vh] md:h-[60vh] bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/shape-bg.jpg')", // تأكد من المسار في مجلد public
      }}
    >
      {/* Overlay Layer - يعطي لمسة الـ White/95 اللي طلبتها */}
      <div className="absolute inset-0 bg-white/90 z-10" />

      {/* Decorative Dots (اختياري لزيادة الفخامة) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-10 bg-[radial-gradient(#a6225d_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto relative z-20 text-center px-3">
        <header>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
            {title}
          </h1>
        </header>

        <nav className="flex justify-center items-center gap-3 text-sm md:text-base font-bold uppercase tracking-wide">
          <Link
            href="/"
            className="text-slate-500 hover:text-main transition-all duration-300 flex items-center gap-1"
          >
            <Home2 />
            {t("home")}
          </Link>

          <span className="text-slate-300">
            <ChevronLeft />
          </span>

          <span className="text-(--main-color) bg-rose-50 px-3 py-1 rounded-md">
            {pageName}
          </span>
        </nav>
      </div>
    </section>
  );
}
