"use client";
import { useState, useEffect } from "react";
import {
  Send,
  User,
  Mail,
  MessageDots,
  ChevronDown,
  Writing,
  CircleCheck,
} from "tabler-icons-react";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

export default function ConsultingForm({ mode = "consulting" }) {
  const t = useTranslations("Consulting");
  const isConsulting = mode === "consulting";

  // States للمنطق والـ Validation
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);

  // إخفاء رسالة النجاح تلقائياً
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setLoad(true);
      const response = await fetch(
        "https://formsubmit.co/ajax/swqedu@gmail.com", // استخدمت ajax للإرسال بدون إعادة توجيه الصفحة
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.status === 200) {
        e.target.reset();
        setSuccess(true);
      }
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/shape-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/95" />

      {/* رسالة النجاح العائمة */}
      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-600 text-white py-4 px-8 rounded-2xl shadow-2xl flex items-center gap-3 z-[9999] animate-bounce">
          <CircleCheck size={24} />
          <span className="font-bold text-lg">{t("form.success")}</span>
        </div>
      )}

      <div className="container mx-auto px-5">
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

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
            onSubmit={handleSubmit}
          >
            {/* إعدادات FormSubmit المخفية */}
            <input type="hidden" name="_captcha" value="false" />
            {/* ده بيخلي الـ Gmail يشوف الفورم "موثوق" أكتر */}
            <input type="hidden" name="_replyto" value="swqedu@gmail.com" />
            <input
              type="hidden"
              name="_subject"
              value={
                isConsulting ? "حجز جلسة استشارية جديدة" : "رسالة تواصل جديدة"
              }
            />

            {/* الاسم الكامل */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <User size={16} className="text-(--main-color)" />
                {t("form.fullName")}
              </label>
              <input
                type="text"
                name="name"
                required
                minLength={3}
                placeholder={t("form.fullNamePlaceholder")}
                className="input-style-custom"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <Mail size={16} className="text-(--main-color)" />
                {t("form.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={t("form.emailPlaceholder")}
                className="input-style-custom"
              />
            </div>

            {/* الحقل المتغير (نوع الجلسة أو الموضوع) */}
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
                  <select
                    name="session_type"
                    className="input-style-custom appearance-none cursor-pointer"
                  >
                    <option value="Exploration">
                      {t("form.explorationSession")}
                    </option>
                    <option value="Roadmap">{t("form.roadmapSession")}</option>
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
                    name="subject"
                    required
                    placeholder={t("form.subjectPlaceholder")}
                    className="input-style-custom"
                  />
                </>
              )}
            </div>

            {/* تفاصيل الرسالة */}
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
                name="message"
                required
                minLength={10}
                rows="4"
                className="input-style-custom resize-none"
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <div
              className="md:col-span-2 mt-4"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <button
                type="submit"
                disabled={load}
                className={`cursor-pointer w-full bg-(--main-color) text-white py-4 md:py-5 rounded-2xl font-black md:text-lg shadow-xl shadow-(--main-color)/20 hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group ${
                  load ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <span>
                  {load
                    ? t("form.loading")
                    : isConsulting
                      ? t("form.confirmBooking")
                      : t("form.sendMessage")}
                </span>
                {!load && (
                  <Send
                    size={20}
                    className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

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
