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
  BrandYoutube,
  BrandTelegram,
} from "tabler-icons-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  const socialMediaLinks = [
    {
      icon: <BrandYoutube size={20} />,
      href: "https://www.youtube.com/@RazanTalks/videos",
    },
    {
      icon: <BrandFacebook size={20} />,
      href: "https://www.facebook.com/share/1GVbKSdsSN/?mibextid=wwXIfr",
    },
    {
      icon: <BrandLinkedin size={20} />,
      href: "https://www.linkedin.com/company/swqedu/",
    },
    {
      icon: <BrandTelegram size={20} />,
      href: "https://t.me/letsstartwithaquestion",
    },
  ];

  const quickLinks = [
    { name: t("home"), href: `/` },
    { name: t("about"), href: `/about` },
    { name: t("services"), href: `/services` },
    { name: t("contact"), href: `/contact` },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 relative overflow-hidden">
      {/* 1. تأثير خلفية ناعم جداً لزيادة العمق */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--main-color)/5 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-(--main-color)/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* العمود الأول: اللوجو والتعريف */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white/5 p-4 rounded-2xl w-fit backdrop-blur-sm border border-white/10 hover:border-(--main-color)/50 transition-colors duration-500">
              <Image
                src="/logo.png"
                alt="Start with a Question"
                width={100}
                height={60}
                loading="lazy"
                className="brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm leading-loose font-medium max-w-xs">
              {t("aboutus")}
            </p>
            {/* أيقونات السوشيال ميديا */}
            <div className="flex gap-4">
              {socialMediaLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-(--main-color) hover:border-(--main-color) hover:-translate-y-2 transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white font-black text-lg mb-8 relative inline-block group">
              {t("quickLinks")}
              <span
                className={`absolute -bottom-2 ${dir === "ltr" ? "left-0" : "right-0"} w-8 h-1 bg-(--main-color) rounded-full transition-all group-hover:w-full`}
              ></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-(--main-color) font-bold text-sm transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-(--main-color) group-hover:scale-125 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الخدمات */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-white font-black text-lg mb-8 relative inline-block group">
              {t("services")}
              <span
                className={`absolute -bottom-2 ${dir === "ltr" ? "left-0" : "right-0"} w-8 h-1 bg-(--main-color) rounded-full transition-all group-hover:w-full`}
              ></span>
            </h3>
            <ul className="space-y-4">
              {[t("session"), t("podcast"), t("volunteer"), t("courses")].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-(--main-color) opacity-0 group-hover:opacity-100 transition-all">
                        {dir === "ltr" ? "→" : "←"}
                      </span>
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* العمود الرابع: معلومات التواصل */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white font-black text-lg mb-8 relative inline-block group">
              {t("contact")}
              <span
                className={`absolute -bottom-2 ${dir === "ltr" ? "left-0" : "right-0"} w-8 h-1 bg-(--main-color) rounded-full transition-all group-hover:w-full`}
              ></span>
            </h3>
            <ul className="space-y-5">
              {[
                {
                  icon: <Phone size={18} />,
                  label: t("phone"),
                  value: "+249 150 124 8489",
                  dir: "ltr",
                },
                {
                  icon: <Mail size={18} />,
                  label: t("email"),
                  value: "info@abdasoual.org",
                  dir: "ltr",
                },
                {
                  icon: <MapPin size={18} />,
                  label: t("address"),
                  value: t("addressInfo"),
                  dir: locale === "ar" ? "rtl" : "ltr",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-(--main-color) group-hover:bg-(--main-color) group-hover:text-white transition-all duration-500 shadow-inner">
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

        {/* الحقوق واللمسة النهائية */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold tracking-wide">
            {t("copyright", { year: new Date().getFullYear() })}
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
