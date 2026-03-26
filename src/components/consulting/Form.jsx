import { Send, User, Mail, MessageDots, ChevronDown } from "tabler-icons-react";
import MainTitle from "../MainTitle";

export default function ConsultingForm() {
  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/shape-bg.jpg')", // تأكد من المسار في مجلد public
      }}
    >
      <div className="absolute inset-0 bg-white/90 " />
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto bg-[#fdfafb] rounded-[3rem] p-8 md:p-16 border border-rose-100 shadow-2xl shadow-rose-100/50 relative overflow-hidden">
          {/* لمسة ديكورية في الخلفية */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-(--main-color)/50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <MainTitle
            title="استشر فريقنا"
            subtitle="نحن هنا لدعمك! ارسل استشارتك وسيتواصل معك فريقنا المتخصص لمساعدتك في إيجاد الحلول."
            center={true}
            fullwidth={1}
          />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* الاسم الكامل */}
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <User size={16} className="text-(--main-color)" /> الاسم الكامل
              </label>
              <input
                type="text"
                placeholder="مثال: أحمد محمد"
                className="w-full px-6 py-4 rounded-2xl border border-rose-100 focus:border-(--main-color) focus:ring-4 focus:ring-(--main-color)/5 outline-none transition-all bg-white text-slate-800 font-medium"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <Mail size={16} className="text-(--main-color)" /> البريد
                الإلكتروني
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-6 py-4 rounded-2xl border border-rose-100 focus:border-(--main-color) focus:ring-4 focus:ring-(--main-color)/5 outline-none transition-all bg-white text-slate-800 font-medium"
              />
            </div>

            {/* نوع الاستشارة */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <ChevronDown size={16} className="text-(--main-color)" /> نوع
                الجلسة المطلوبة
              </label>
              <select className="w-full px-6 py-4 rounded-2xl border border-rose-100 focus:border-(--main-color) outline-none transition-all bg-white text-slate-800 font-medium appearance-none">
                <option>جلسة الاستكشاف السريعة (30 دقيقة)</option>
                <option>خطة الطريق المتكاملة (90 دقيقة)</option>
                <option>تأهيل المقابلات الشخصية</option>
              </select>
            </div>

            {/* الرسالة أو التفاصيل */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-black text-slate-700 mr-2 flex items-center gap-2">
                <MessageDots size={16} className="text-(--main-color)" /> نبذة
                عن تحدياتك المهنية
              </label>
              <textarea
                rows="4"
                placeholder="اكتب لنا باختصار ما الذي تود تحقيقه من هذه الجلسة..."
                className="w-full px-6 py-4 rounded-2xl border border-rose-100 focus:border-(--main-color) focus:ring-4 focus:ring-(--main-color)/5 outline-none transition-all bg-white text-slate-800 font-medium resize-none"
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="cursor-pointer w-full bg-(--main-color) text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-(--main-color)/20 hover:bg-slate-800 hover:shadow-none transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>إرسال الطلب الآن</span>
                <Send
                  size={22}
                  className="group-hover:-translate-x-1.25 group-hover:-translate-y-1.25 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
