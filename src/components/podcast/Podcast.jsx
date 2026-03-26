import Image from "next/image";
import MainTitle from "../MainTitle";
import { BrandYoutube } from "tabler-icons-react";
import Link from "next/link";

const episodes = [
  {
    id: "01",
    title: "نبدأ من وين؟",
    link: "https://youtu.be/0opNH7nV0tU?si=4vaHwuCBgtVBm7SF",
    img: "/podcast-1.jpg",
  },
  {
    id: "02",
    title: "من مبتدئ الى محترف",
    link: "https://youtu.be/cMbxlCkby1o?si=_G_zk6iRanOFBOev",
    img: "/podcast-2.jpg",
  },
  {
    id: "03",
    title: "ريادة الاعمال المجتمعية من الافكار الى التأثير",
    link: "https://youtu.be/7QcqEU_jzCo?si=ADoY7s5o0UoBM7TG",
    img: "/podcast-3.jpg",
  },
  {
    id: "04",
    title: "جسور المعرفة بين الاكاديميات والبزنس",
    link: "https://youtu.be/7QcqEU_jzCo?si=rFMu2ax5BB2QYXRE",
    img: "/podcast-4.jpg",
  },
  {
    id: "05",
    title: "المنح الدراسية",
    link: "https://youtu.be/AEtwsIWmYoI?si=mKsXinrxKZOpHLjH",
    img: "/podcast-5.jpg",
  },
  {
    id: "06",
    title: "صناعة العلامة الشخصية",
    link: "https://youtu.be/CZVLXjSk_ZA?si=F3FuvnorOz9CKg-u",
    img: "/podcast-6.jpg",
  },
  {
    id: "07",
    title: "رحلة البراندينق في العالم الجديد",
    link: "https://youtu.be/4Cnef1wqVGs?si=3gQ2sMKatUcGMu8g",
    img: "/podcast-7.jpg",
  },
  {
    id: "08",
    title: "الفرص الاستثمارية بعد الحرب",
    link: "https://youtu.be/EC4Ny9lLs-M?si=PPxrrZDom1XuFThK",
    img: "/podcast-8.jpg",
  },
];

export default function PodcastSection({ home }) {
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
        <MainTitle
          title="كلام رزان"
          subtitle="بودكاست يهدف إلى تمكين الشباب والطلاب والخريجين الجدد في مسيرتهم المهنية، من خلال استكشاف مواضيع ملهمة وتقديم طرق عملية للتأهيل."
          center={true}
        />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${home ? "lg:grid-cols-3" : "lg:grid-cols-4"} my-16 gap-6`}
        >
          {(home ? episodes.slice(0, 3) : episodes).map((episode) => (
            <div
              key={episode.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-rose-50"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={episode.img}
                  alt={episode.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <i className="ti ti-player-play-filled text-white text-4xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"></i>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between h-40">
                <h2 className="font-bold text-slate-700 text-sm md:text-base line-clamp-2">
                  الحلقة {episode.id}: {episode.title}
                </h2>

                <a
                  target="_blank"
                  href={episode.link}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-(--main-color) text-white py-2.5 px-4 rounded-lg hover:bg-pink-700 transition-colors text-sm font-bold shadow-sm"
                >
                  <BrandYoutube />
                  <span>شاهد الآن</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {home && (
        <div className="text-center flex flex-col items-center justify-center py-5">
          <Link
            href="/contact"
            className="bg-(--main-color) text-white px-10 py-3 rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200"
          >
            شاهد كل الحلقات
          </Link>
        </div>
      )}
    </section>
  );
}
