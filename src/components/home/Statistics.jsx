"use client";
import { useState, useEffect, useRef } from "react";
import { Article, Clover, Confetti, Microphone } from "tabler-icons-react";

// وظيفة لتنسيق الرقم في النهاية (مثلاً 1M أو 50K)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // لو مليون يظهر 1M
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K"; // لو ألف يظهر 1K
  }
  return num; // لو أقل يظهر الرقم عادي
};
// مكون فرعي للرقم الواحد عشان كل واحد يعد لوحده
const Counter = ({ endValue, duration = 2000, startCount }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!startCount) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setIsFinished(true); // أول ما يخلص العَد نغير الحالة
      }
    };

    window.requestAnimationFrame(step);
  }, [startCount, endValue, duration]);

  // لو لسه بيعد يظهر الرقم بيتحرك، لو خلص يظهر التنسيق المختصر (1M)
  return (
    <span>{isFinished ? formatNumber(endValue) : count.toLocaleString()}</span>
  );
};

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      label: "متابعين",
      value: 1000000,
      icon: <Confetti className="text-white text-2xl" />,
      prefix: "+",
    },
    {
      id: 2,
      label: "استشارات شخصية",
      value: 50,
      icon: <Clover className="text-white text-2xl" />,
      prefix: "+",
    },
    {
      id: 3,
      label: "بث مباشر",
      value: 10,
      icon: <Microphone className="text-white text-2xl" />,
      prefix: "",
    },
    {
      id: 4,
      label: "منشور",
      value: 35,
      icon: <Article className="text-white text-2xl" />,
      prefix: "+",
    },
  ];

  return (
    <section className="py-16 bg-(--second-color)" ref={sectionRef}>
      <div className="container mx-auto px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="text-center flex flex-col items-center gap-3 p-10 bg-(--main-color) rounded-md relative shadow-lg"
          >
            <div className="w-15 h-15 flex justify-center items-center rounded-full absolute -top-5 -inset-e-5 bg-slate-800 border-[7px] border-[#fffbf7]">
              {stat.icon}
            </div>

            <h2 className="mt-5 text-(--second-color) text-4xl md:text-[50px] font-bold">
              {stat.prefix}
              <Counter endValue={stat.value} startCount={isVisible} />
            </h2>

            <p className="text-(--second-color) text-md md:text-xl font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
