// components/home/Services.jsx
import Image from "next/image";
import Card from "./ServicesCard";
import MainTitle from "../MainTitle";
import {
  Book,
  DeviceLaptop,
  School,
  Speakerphone,
  UserCheck,
  Writing,
} from "tabler-icons-react";

const servicesData = [
  {
    id: "٠١",
    title: "محتوى تعليمي",
    icon: <Book />,
    desc: "مشاركة محتوى مكتوب ومرئي باستمرار عبر منصاتنا على وسائل التواصل الاجتماعي، لتبسيط المعرفة للمستفيدين.",
  },
  {
    id: "٠٢",
    title: "كلام رزان",
    icon: <Speakerphone />,
    desc: "بودكاست يهدف إلى تمكين الشباب والطلاب والخريجين الجدد في مسيرتهم المهنية، من خلال استكشاف مواضيع متنوعة.",
  },
  {
    id: "٠٣",
    title: "دورات تدريبية",
    icon: <School />,
    desc: "نقدم دورات تدريبية دورية افتراضية عبر منصة 'التلغرام'، تهدف إلى تعميق الفهم لأهم المهارات المطلوبة.",
  },
  {
    id: "٠٤",
    title: "مستشارك المهني",
    icon: <UserCheck />,
    desc: "يوفر برنامج 'مستشارك المهني' جلسات استشارة مهنية افتراضية، للحصول على إرشادات حول تخطيط المسار.",
  },
  {
    id: "٠٥",
    title: "فرص تدريب وتطوع",
    icon: <DeviceLaptop />,
    desc: "بالتعاون مع منظمات غير حكومية نقدّم فرص تطوع عن بُعد مثل: تطوير المواقع، وإدارة وسائل التواصل.",
  },
  {
    id: "٠٦",
    title: "التقديم للمنح",
    icon: <Writing />,
    desc: "نحن هنا لمساعدتك في زيادة فرص قبولك في المنح الدراسية من خلال تحسين المقالات والسيرة الذاتية.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background Icon */}
      <div className="absolute -right-30 -top-20 w-75 z-10 opacity-20">
        <Image
          src="/bg-logo-removebg-preview.png"
          alt="icon"
          width={300}
          height={300}
        />
      </div>

      <div className="container mx-auto px-5 md:px-0 mt-10 md:mt-0 relative z-20">
        {/* استخدمنا المكون الجاهز MainTitle مع خاصية center */}
        <MainTitle
          title="افضل خدماتنا"
          subtitle="نحرص على تقديم تحليلات عميقة ونصائح استراتيجية تساعدك على الاستعداد لمستقبل مسارك المهني."
          center={true}
        />

        {/* Grid الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              id={service.id}
              title={service.title}
              icon={service.icon}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
