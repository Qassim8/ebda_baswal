// components/services/ServicesSection.jsx
"use client";
import Image from "next/image";
import Card from "./ServicesCard";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";
import {
  Book,
  DeviceLaptop,
  School,
  Speakerphone,
  UserCheck,
  Writing,
} from "tabler-icons-react";

export default function ServicesSection() {
  const t = useTranslations("Services");

  const servicesData = [
    {
      id: "01",
      titleKey: "service1.title",
      descKey: "service1.description",
      icon: <Book />,
    },
    {
      id: "02",
      titleKey: "service2.title",
      descKey: "service2.description",
      icon: <Speakerphone />,
    },
    {
      id: "03",
      titleKey: "service3.title",
      descKey: "service3.description",
      icon: <School />,
    },
    {
      id: "04",
      titleKey: "service4.title",
      descKey: "service4.description",
      icon: <UserCheck />,
    },
    {
      id: "05",
      titleKey: "service5.title",
      descKey: "service5.description",
      icon: <DeviceLaptop />,
    },
    {
      id: "06",
      titleKey: "service6.title",
      descKey: "service6.description",
      icon: <Writing />,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* 1. لوجو الخلفية: يظهر بنعومة فائقة مع دوران خفيف */}
      <div
        className="absolute -right-30 -top-20 w-75 z-10 opacity-20"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Image
          src="/bg-logo-removebg-preview.png"
          alt="icon"
          width={300}
          height={300}
          loading="lazy"
          className="rotate-12"
        />
      </div>

      <div className="container mx-auto px-5 md:px-0 mt-10 md:mt-0 relative z-20">
        {/* 2. العنوان الرئيسي: يظهر من الأعلى */}
        <div data-aos="fade-down" data-aos-duration="1000">
          <MainTitle
            title={t("title")}
            subtitle={t("subtitle")}
            center={true}
          />
        </div>

        {/* 3. شبكة الكروت: كل كرت يظهر بتأخير (Delay) عن الذي قبله */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100} // تأخير متسلسل 100ms بين كل كرت
              data-aos-duration="800"
            >
              <Card
                id={service.id}
                title={t(service.titleKey)}
                desc={t(service.descKey)}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
