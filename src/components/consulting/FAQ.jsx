"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import MainTitle from "../MainTitle";
import { ChevronDown } from "tabler-icons-react";

export default function FAQ({ contact }) {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  // مصفوفة الأسئلة
  const questions = [0, 1, 2, 3, 4, 5];

  return (
    <section
      className={`py-20 ${contact ? "bg-white" : "bg-(--second-color)"} overflow-hidden`}
      id="faq"
    >
      <div className="container mx-auto px-5">
        {/* العنوان مع أنميشن بسيط */}
        <div data-aos="fade-up">
          <MainTitle title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div
          className=" mx-auto mt-16 space-y-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {questions.map((index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-(--main-color) shadow-xl shadow-slate-200/50"
                  : "border-slate-100 shadow-sm hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex justify-between items-center p-6 text-start cursor-pointer outline-none ${openIndex === index ? "bg-(--alt-color) rounded-t-2xl" : "rounded-2xl"} transition-colors duration-300`}
              >
                <span
                  className={`text-sm md:text-lg font-bold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-(--main-color)"
                      : "text-slate-800"
                  }`}
                >
                  {t(`questions.${index}.q`)}
                </span>

                <div
                  className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "bg-(--main-color) text-white"
                      : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                  }`}
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-125 opacity-100 border-t border-slate-50"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="p-6 pt-5">
                  <p className="text-slate-600 leading-relaxed text-[12px] md:text-base">
                    {t(`questions.${index}.a`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
