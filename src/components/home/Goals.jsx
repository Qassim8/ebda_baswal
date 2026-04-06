"use client";
import { Link } from "@/i18n/navigation";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function Goals({ about }) {
  const t = useTranslations("Goals");
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  return (
    <section
      className={`py-20 ${about ? "bg-(--second-color)" : "bg-white"} overflow-hidden`}
    >
      <div className="container mx-auto px-3 md:px-0">
        <div data-aos="fade-down">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 w-full items-center">
          {/* 1. Mission Card: يظهر من الجانب (حسب الاتجاه) */}
          <div
            className="relative z-10"
            data-aos={dir === "rtl" ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
          >
            <div
              className={`absolute -top-7 ${dir === "rtl" ? "-right-7" : "-left-7"} h-20 w-20 bg-(--alt-color) -z-10 rounded-full`}
            ></div>

            <div className="p-7 md:p-10 bg-(--main-color) rounded-xl shadow-xl min-h-80 flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl text-(--alt-color) font-bold mb-4">
                {t("mission")}
              </h3>
              <p className="text-slate-50 text-sm md:text-base leading-relaxed">
                {t("missionText")}
              </p>
            </div>
          </div>

          {/* 2. Contact Button Center: يظهر بتكبير ناعم في المنتصف */}
          <div
            className="text-center flex flex-col items-center justify-center py-5"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <Link
              href="/contact"
              className="py-3 px-8 border border-slate-800 text-slate-800 font-bold transition-all duration-300 hover:bg-slate-800 hover:text-(--alt-color) rounded-xl"
            >
              {t("contactButton")}
            </Link>
          </div>

          {/* 3. Vision Card: يظهر من الجانب المقابل */}
          <div
            className="relative z-10"
            data-aos={dir === "rtl" ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div
              className={`absolute -bottom-7 ${dir === "rtl" ? "-left-7" : "-right-7"} h-20 w-20 border-2 border-(--main-color)/40 -z-10 rounded-full`}
            ></div>

            <div className="p-7 md:p-10 bg-(--alt-color) rounded-xl shadow-md min-h-80 flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl text-(--main-color) font-bold mb-4">
                {t("vision")}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {t("visionText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
