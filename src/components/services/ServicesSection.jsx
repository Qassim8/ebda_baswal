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
      {/* Background Icon */}
      <div className="absolute -right-30 -top-20 w-75 z-10 opacity-20">
        <Image
          src="/bg-logo-removebg-preview.png"
          alt="icon"
          width={300}
          height={300}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-5 md:px-0 mt-10 md:mt-0 relative z-20">
        <MainTitle title={t("title")} subtitle={t("subtitle")} center={true} />

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              id={service.id}
              title={t(service.titleKey)}
              desc={t(service.descKey)}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
