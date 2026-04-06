import Image from "next/image";
import MainTitle from "../MainTitle";
import { BrandYoutube } from "tabler-icons-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PodcastSection({ home }) {
  const t = useTranslations("Podcast");

  const episodeData = [
    {
      id: "01",
      titleKey: "episode1",
      link: "https://youtu.be/0opNH7nV0tU?si=4vaHwuCBgtVBm7SF",
      img: "/podcast-1.jpg",
    },
    {
      id: "02",
      titleKey: "episode2",
      link: "https://youtu.be/cMbxlCkby1o?si=_G_zk6iRanOFBOev",
      img: "/podcast-2.jpg",
    },
    {
      id: "03",
      titleKey: "episode3",
      link: "https://youtu.be/7QcqEU_jzCo?si=ADoY7s5o0UoBM7TG",
      img: "/podcast-3.jpg",
    },
    {
      id: "04",
      titleKey: "episode4",
      link: "https://youtu.be/7QcqEU_jzCo?si=rFMu2ax5BB2QYXRE",
      img: "/podcast-4.jpg",
    },
    {
      id: "05",
      titleKey: "episode5",
      link: "https://youtu.be/AEtwsIWmYoI?si=mKsXinrxKZOpHLjH",
      img: "/podcast-5.jpg",
    },
    {
      id: "06",
      titleKey: "episode6",
      link: "https://youtu.be/CZVLXjSk_ZA?si=F3FuvnorOz9CKg-u",
      img: "/podcast-6.jpg",
    },
    {
      id: "07",
      titleKey: "episode7",
      link: "https://youtu.be/4Cnef1wqVGs?si=3gQ2sMKatUcGMu8g",
      img: "/podcast-7.jpg",
    },
    {
      id: "08",
      titleKey: "episode8",
      link: "https://youtu.be/EC4Ny9lLs-M?si=PPxrrZDom1XuFThK",
      img: "/podcast-8.jpg",
    },
  ];

  return (
    <section
      className="py-20 bg-(--second-color) relative overflow-hidden"
      id="podcast"
    >
      {/* Decorative Background Icon */}
      <div className="absolute -right-24 -top-20 w-75 z-10 opacity-20 pointer-events-none">
        <Image
          src="/bg-logo-removebg-preview.png"
          alt="icon"
          width={300}
          height={300}
          className="max-w-full"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-5 md:px-0 relative z-20">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${home ? "lg:grid-cols-3" : "lg:grid-cols-4"} my-16 gap-6`}
        >
          {(home ? episodeData.slice(0, 3) : episodeData).map((episode) => (
            <div
              key={episode.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-rose-50"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={episode.img}
                  alt={t(episode.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <i className="ti ti-player-play-filled text-white text-4xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"></i>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between h-40">
                <h2 className="font-bold text-slate-700 text-sm md:text-base line-clamp-2">
                  {t("episodeLabel")} {episode.id}: {t(episode.titleKey)}
                </h2>

                <a
                  target="_blank"
                  href={episode.link}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-(--main-color) text-white py-2.5 px-4 rounded-lg hover:bg-pink-700 transition-colors text-sm font-bold shadow-sm"
                >
                  <BrandYoutube />
                  <span>{t("watchNow")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {home && (
        <div className="text-center flex flex-col items-center justify-center py-5">
          <Link
            href="/podcast"
            className="bg-(--main-color) text-white px-10 py-3 rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200"
          >
            {t("viewAll")}
          </Link>
        </div>
      )}
    </section>
  );
}
