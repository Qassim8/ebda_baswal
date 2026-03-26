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

export default function ConsultingForm({ mode = "consulting" }) {
  const isConsulting = mode === "consulting";

  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/shape-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/95" />{" "}
      {/* زدت الشفافية شوية لراحة العين */}
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto bg-[#fdfafb] rounded-[3rem] p-8 md:p-16 border border-rose-100 shadow-2xl shadow-rose-100/50 relative z-10">
          <MainTitle
            title={isConsulting ? "احجز جلستك الآن" : "تواصل معنا"}
            subtitle={
              isConsulting
                ? "ارسل تفاصيل استشارتك وسيتواصل معك فريقنا لتحديد الموعد."
                : "لديك استفسار أو اقتراح؟ نحن هنا للاستماع إليك والرد في أسرع وقت."
            }
            center={true}
            fullwidth={1}
          />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* الحقول المشتركة */}
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <User size={16} className="text-(--main-color)" /> الاسم الكامل
              </label>
              <input
                type="text"
                placeholder="مثال: أحمد محمد"
                className="input-style-custom"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <Mail size={16} className="text-(--main-color)" /> البريد
                الإلكتروني
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input-style-custom"
              />
            </div>

            {/* حقل متغير حسب الـ Mode */}
            {isConsulting ? (
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                  <ChevronDown size={16} className="text-(--main-color)" /> نوع
                  الجلسة
                </label>
                <select className="input-style-custom appearance-none cursor-pointer">
                  <option>جلسة الاستكشاف (30 دقيقة)</option>
                  <option>خطة الطريق (90 دقيقة)</option>
                </select>
              </div>
            ) : (
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                  <Writing size={16} className="text-(--main-color)" /> موضوع
                  الرسالة
                </label>
                <input
                  type="text"
                  placeholder="استفسار عام، تعاون، إلخ..."
                  className="input-style-custom"
                />
              </div>
            )}

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <MessageDots size={16} className="text-(--main-color)" />
                {isConsulting ? "نبذة عن تحدياتك" : "تفاصيل رسالتك"}
              </label>
              <textarea
                rows="4"
                className="input-style-custom resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-4">
              <button className="cursor-pointer w-full bg-(--main-color) text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-(--main-color)/20 hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group">
                <span>{isConsulting ? "تأكيد الحجز" : "إرسال الرسالة"}</span>
                <Send
                  size={22}
                  className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
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
          transition: all 0.3s;
          font-weight: 500;
        }
        .input-style-custom:focus {
          border-color: var(--main-color);
          box-shadow: 0 0 0 4px rgba(166, 34, 93, 0.05);
        }
      `}</style>
    </section>
  );
}
