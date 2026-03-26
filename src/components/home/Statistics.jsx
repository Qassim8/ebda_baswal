"use client";
import { useState, useEffect, useRef } from "react";
import { Article, Clover, Confetti, Microphone } from "tabler-icons-react";

// دالة تنسيق الأرقام (تحويل 1000000 لـ 1M)
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

const Counter = ({ endValue, duration = 2000, startCount }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!startCount) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // تأثير الـ Ease Out عشان العد يبطأ في الآخر ويكون مريح للعين
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setIsFinished(true);
      }
    };

    window.requestAnimationFrame(step);
  }, [startCount, endValue, duration]);

  return (
    <span>{isFinished ? formatNumber(endValue) : count.toLocaleString()}</span>
  );
};

export default function Statistics({ home }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      label: "متابعين",
      value: 1000000,
      icon: <Confetti size={28} />,
      prefix: "+",
    },
    {
      id: 2,
      label: "استشارات شخصية",
      value: 50,
      icon: <Clover size={28} />,
      prefix: "+",
    },
    {
      id: 3,
      label: "بث مباشر",
      value: 40,
      icon: <Microphone size={28} />,
      prefix: "+",
    },
    {
      id: 4,
      label: "منشور",
      value: 250,
      icon: <Article size={28} />,
      prefix: "+",
    },
  ];

  return (
    <section
      className={`py-20 ${home ? "bg-(--second-color)" : "bg-white"} relative overflow-hidden`}
      ref={sectionRef}
    >
      {/* لمسة خلفية لتكرار الاستايل الجمالي */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-(--main-color)/80 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="group text-center flex flex-col items-center gap-2 p-10 bg-(--main-color) rounded-[2.5rem] relative shadow-2xl shadow-(--main-color)/10 transition-transform duration-500 hover:-translate-y-2"
          >
            {/* الأيقونة بتصميمك مع لمسة احترافية */}
            <div className="w-16 h-16 flex justify-center items-center rounded-2xl absolute -top-8 bg-slate-800 border-[6px] border-white text-white shadow-lg transition-transform duration-500 group-hover:rotate-12">
              {stat.icon}
            </div>

            <h2 className="mt-4 text-white text-5xl md:text-6xl font-black tracking-tighter">
              <span className="text-rose-200">{stat.prefix}</span>
              <Counter endValue={stat.value} startCount={isVisible} />
            </h2>

            <p className="text-rose-50 text-md md:text-lg font-bold opacity-90 tracking-wide uppercase">
              {stat.label}
            </p>

            {/* شكل ديكوري صغير في الكارد */}
            <div className="absolute bottom-4 right-6 w-12 h-12 bg-white/5 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
