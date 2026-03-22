"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats({ stats: customStats }) {
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const defaultStats = [
    { count: "1000000", label: "متابعين", icon: "ti-confetti" },
    { count: "50", label: "استشارات شخصية", icon: "ti-clover" },
    { count: "10", label: "بث مباشر", icon: "ti-microphone" },
    { count: "35", label: "منشور", icon: "ti-article" },
  ];

  const displayStats = customStats || defaultStats;

  useEffect(() => {
    const stats = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            startCounting();
            setCountersStarted(true);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (stats) observer.observe(stats);

    return () => {
      if (stats) observer.unobserve(stats);
    };
  }, [countersStarted]);

  const startCounting = () => {
    const counters = document.querySelectorAll("[data-counter]");
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-counter") || 0);
      let count = 0;
      const isMillion = target >= 1000000;
      const step = Math.ceil(target / 200);

      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }

        if (isMillion) {
          if (counter instanceof HTMLElement)
            counter.innerText = count >= 1000000 ? "1M" : `${count}`;
        } else {
          if (counter instanceof HTMLElement)
            counter.innerText = count.toString();
        }
      }, 30);
    });
  };

  return (
    <section className="py-16 bg-amber-50" ref={statsRef} id="stats">
      <div className="container mx-auto px-3 md:px-0 grid md:grid-cols-4 gap-16">
        {displayStats.map((stat, idx) => (
          <div
            key={idx}
            className="text-center flex flex-col items-center gap-3 p-5 bg-pink-600 rounded-md relative"
          >
            <div className="w-16 h-16 flex justify-center items-center rounded-full absolute -top-5 -end-5 bg-slate-700 border-8 border-amber-50">
              <i className={`ti ${stat.icon} text-white text-2xl`}></i>
            </div>
            <h2 className="mt-5 text-orange-100 text-lg md:text-5xl font-bold">
              +<span data-counter={stat.count}>0</span>
            </h2>
            <p className="text-amber-50 text-md md:text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
