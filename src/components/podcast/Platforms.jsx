"use client";
import { useEffect, useState } from "react";
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
    brandColor: "#FF0000",
    animName: "pulse-youtube",
  },
  {
    name: "Facebook",
    icon: <IconBrandFacebook size={32} />,
    brandColor: "#1877F2",
    animName: "pulse-facebook",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin size={32} />,
    brandColor: "#0A66C2",
    animName: "pulse-linkedin",
  },
  {
    name: "Spotify",
    icon: <IconBrandSpotify size={32} />,
    brandColor: "#1DB954",
    animName: "pulse-spotify",
  },
];

export default function PodcastPlatforms() {
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  const doublePlatforms = [
    ...socialPlatforms,
    ...socialPlatforms,
    ...socialPlatforms,
    ...socialPlatforms,
  ];

  return (
    <section className="py-12 bg-white border-y border-rose-50 overflow-hidden relative">
      {/* التدرج الجانبي للإخفاء التدريجي */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>

      <div className="flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center py-4">
          {doublePlatforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center gap-4 cursor-pointer transition-transform duration-500 hover:scale-110"
              style={{
                // تطبيق أنميشن اللون المخصص لكل منصة
                animation: `${platform.animName} 4s infinite ease-in-out`,
                // إضافة delay عشوائي عشان ما ينوروش كلهم مع بعض في نفس اللحظة
              }}
            >
              {dir === "rtl" ? (
                <>
                  <span className="text-xl font-black tracking-tight">
                    {platform.name}
                  </span>
                  <div className="p-4 bg-slate-50 rounded-[1.2rem] shadow-sm flex items-center justify-center">
                    {platform.icon}
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-slate-50 rounded-[1.2rem] shadow-sm flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <span className="text-xl font-black tracking-tight">
                    {platform.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${dir === "rtl" ? "50%" : "-50%"});
          }
        }

        /* تعريف حركات الألوان لكل منصة */
        @keyframes pulse-youtube {
          0%,
          100% {
            color: #cbd5e1;
          } /* slate-300 */
          50% {
            color: #ff0000;
          }
        }
        @keyframes pulse-facebook {
          0%,
          100% {
            color: #cbd5e1;
          }
          50% {
            color: #1877f2;
          }
        }
        @keyframes pulse-linkedin {
          0%,
          100% {
            color: #cbd5e1;
          }
          50% {
            color: #0a66c2;
          }
        }
        @keyframes pulse-spotify {
          0%,
          100% {
            color: #cbd5e1;
          }
          50% {
            color: #1db954;
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: max-content;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
