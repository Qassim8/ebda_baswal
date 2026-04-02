"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  BrandLinkedin,
  BrandInstagram,
  BrandFacebook,
  Heart,
} from "tabler-icons-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-[#2b2a2a] text-white pt-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--main-color)/10 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* 1. Logo + About */}
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-2xl w-fit backdrop-blur-sm border border-white/10">
              <Image
                src="/logo.png"
                alt="Start with a Question"
                width={100}
                height={60}
                className="brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm leading-loose font-medium">
              {t("aboutus")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[BrandLinkedin, BrandInstagram, BrandFacebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-(--main-color) hover:border-(--main-color) hover:-translate-y-1.5 transition-all duration-300 shadow-lg"
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-black text-lg mb-8 relative inline-block">
              {t("quickLinks")}
              <span className="absolute -bottom-2 right-0 w-10 h-1.5 bg-(--main-color) rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-(--main-color) font-bold text-sm transition-all flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:scale-150 group-hover:bg-(--main-color) transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h3 className="text-white font-black text-lg mb-8 relative inline-block">
              {t("quickLinks")}
              <span className="absolute -bottom-2 right-0 w-10 h-1.5 bg-(--main-color) rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Consultation Sessions",
                "Career Podcast",
                "Volunteer Opportunities",
                "Training Courses",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white hover:pr-2 font-bold text-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-(--main-color)">←</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-white font-black text-lg mb-8 relative inline-block">
              {t("contact")}
              <span className="absolute -bottom-2 right-0 w-10 h-1.5 bg-(--main-color) rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              {[
                {
                  icon: <Phone size={20} />,
                  label: t("phone"),
                  value: "+249 150 124 8489",
                  dir: "ltr",
                },
                {
                  icon: <Mail size={20} />,
                  label: t("email"),
                  value: "info@abdasoual.org",
                  dir: "rtl",
                },
                {
                  icon: <MapPin size={20} />,
                  label: t("address"),
                  value: "Sudan - Khartoum",
                  dir: locale === "ar" ? "rtl" : "ltr",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-(--main-color) group-hover:bg-(--main-color) group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span
                      dir={item.dir}
                      className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors"
                    >
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold tracking-wide">
            {t("copyright", { year: currentYear })}
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-xs font-bold group">
            <span>{t("madeWith")}</span>
            <Heart
              size={18}
              className="text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300 animate-pulse"
            />
            <span>{t("by")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
