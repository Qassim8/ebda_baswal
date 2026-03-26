"use client";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconBrandYoutube,
} from "@tabler/icons-react";

const socialPlatforms = [
  {
    name: "YouTube",
    icon: <IconBrandYoutube size={32} />,
    color: "hover:text-[#FF0000]",
  },
  {
    name: "Facebook",
    icon: <IconBrandFacebook size={32} />,
    color: "hover:text-[#1877F2]",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin size={32} />,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Spotify",
    icon: <IconBrandSpotify size={32} />,
    color: "hover:text-[#1DB954]",
  }, // لو حبيت تضيفه مستقبلاً
];

export default function PodcastPlatforms() {
  // بنكرر المصفوفة عشان الحركة تكون مستمرة بدون فراغات
  const doublePlatforms = [
    ...socialPlatforms,
    ...socialPlatforms,
    ...socialPlatforms,
    ...socialPlatforms,
  ];

  return (
    <section className="py-12 bg-white border-y border-rose-50 overflow-hidden relative">
      {/* تأثير الـ Fade على الجوانب عشان الحركة تختفي وتظهر بسلاسة */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center py-4">
          {doublePlatforms.map((platform, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 text-slate-300 transition-all duration-300 ${platform.color} hover:scale-110 cursor-pointer`}
            >
              <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white shadow-sm">
                {platform.icon}
              </div>
              <span className="text-xl font-black tracking-tight">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* إضافة الـ Animation في Tailwind config أو كـ Style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        /* توقف الحركة عند الوقوف بالماوس لسهولة الضغط */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
