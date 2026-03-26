"use client";
import { IconCalendarCheck } from "@tabler/icons-react";
import Link from "next/link";
import { Microphone2, Rocket } from "tabler-icons-react";

export default function ServicesCTA() {
  return (
    <section
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/shape-bg.jpg')", // تأكد من المسار في مجلد public
      }}
    >
      <div className="absolute inset-0 bg-white/90 " />
      <div className="container mx-auto px-5">
        <div className="bg-(--main-color) rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-(--main-color)/20 group">
          {/* لمسات خلفية متحركة خفيفة */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-(--alt-color)/20 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-125"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-(--second-color)/20 rounded-full blur-2xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* المحتوى النصي */}
            <div className="lg:w-2/3 text-center lg:text-right">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                هل أنت مستعد لرسم مسارك <br className="hidden md:block" />{" "}
                المهني بكل ثقة؟
              </h2>
              <p className="text-rose-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                سواء كنت تفضل الاستماع لخبراتنا عبر البودكاست، أو الحصول على
                استشارة مهنية خاصة، نحن هنا لندعم خطواتك.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* زرار الاستشارات */}
                <Link
                  href="/consulting"
                  className="bg-white text-(--main-color) px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <IconCalendarCheck size={24} />
                  احجز استشارتك الآن
                </Link>

                {/* زرار البودكاست */}
                <Link
                  href="/podcast"
                  className="bg-(--main-color) border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Microphone2 size={24} />
                  استمع للبودكاست
                </Link>
              </div>
            </div>

            {/* الأيقونة الضخمة في الجانب */}
            <div className="lg:w-1/3 hidden lg:flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-[3rem] backdrop-blur-md border border-white/20 flex items-center justify-center relative animate-bounce-slow">
                <div className="text-white text-[120px] opacity-90 drop-shadow-2xl">
                  <Rocket size={120} />
                </div>
                {/* نقاط مضيئة حول الأيقونة */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-rose-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
