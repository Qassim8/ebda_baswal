"use client";
import {
  Send,
  User,
  Mail,
  MessageDots,
  ChevronDown,
  Writing,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

export default function ConsultingForm({ mode = "consulting" }) {
  const t = useTranslations("Consulting");
  const isConsulting = mode === "consulting";

  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/shape-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/95" />

      <div className="container mx-auto px-5">
        {/* 1. الحاوية الرئيسية: تظهر بارتفاع ناعم من الأسفل مع ظل قوي */}
        <div
          className="max-w-4xl mx-auto bg-[#fdfafb] rounded-[3rem] p-8 md:p-16 border border-rose-100 shadow-2xl shadow-rose-100/50 relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div data-aos="fade-down" data-aos-delay="200">
            <MainTitle
              title={
                isConsulting
                  ? t("form.bookSessionTitle")
                  : t("form.contactTitle")
              }
              subtitle={
                isConsulting
                  ? t("form.bookSessionSubtitle")
                  : t("form.contactSubtitle")
              }
              center={true}
              fullwidth={1}
            />
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* 2. حقول الإدخال: تظهر بتأخير بسيط لترتيب العين */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <User size={16} className="text-(--main-color)" />
                {t("form.fullName")}
              </label>
              <input
                type="text"
                placeholder={t("form.fullNamePlaceholder")}
                className="input-style-custom"
              />
            </div>

            <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <Mail size={16} className="text-(--main-color)" />
                {t("form.email")}
              </label>
              <input
                type="email"
                placeholder={t("form.emailPlaceholder")}
                className="input-style-custom"
              />
            </div>

            {/* الحقل المتغير */}
            <div
              className="md:col-span-2 space-y-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {isConsulting ? (
                <>
                  <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                    <ChevronDown size={16} className="text-(--main-color)" />
                    {t("form.sessionType")}
                  </label>
                  <select className="input-style-custom appearance-none cursor-pointer">
                    <option>{t("form.explorationSession")}</option>
                    <option>{t("form.roadmapSession")}</option>
                  </select>
                </>
              ) : (
                <>
                  <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                    <Writing size={16} className="text-(--main-color)" />
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.subjectPlaceholder")}
                    className="input-style-custom"
                  />
                </>
              )}
            </div>

            <div
              className="md:col-span-2 space-y-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <MessageDots size={16} className="text-(--main-color)" />
                {isConsulting
                  ? t("form.challengesDescription")
                  : t("form.messageDetails")}
              </label>
              <textarea
                rows="4"
                className="input-style-custom resize-none"
              ></textarea>
            </div>

            {/* 3. زر الإرسال: يظهر بحركة Zoom لتأكيد الأهمية */}
            <div
              className="md:col-span-2 mt-4"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <button className="cursor-pointer w-full bg-(--main-color) text-white py-4 md:py-5 rounded-2xl font-black md:text-lg shadow-xl shadow-(--main-color)/20 hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group">
                <span>
                  {isConsulting
                    ? t("form.confirmBooking")
                    : t("form.sendMessage")}
                </span>
                <Send
                  size={20}
                  className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ستايل مخصص لضمان سلاسة حركة الـ Focus */}
      <style jsx>{`
        .input-style-custom {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid #ffe4e6;
          background: white;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
        }
        .input-style-custom:focus {
          border-color: var(--main-color);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(166, 34, 93, 0.1);
        }
      `}</style>
    </section>
  );
}
