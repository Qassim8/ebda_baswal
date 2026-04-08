"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Language, Menu2, X, ChevronDown } from "tabler-icons-react";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // لمراقبة السكرول
  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("Navbar");

  const menuRef = useRef(null);
  const langRef = useRef(null);

  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  // مراقبة السكرول لتغيير شكل الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSelectChange = (nextLocale) => {
    if (nextLocale === localActive) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
    setLangOpen(false);
  };

  useEffect(() => {
    const onOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setIsOpen(false);
      if (langRef.current && !langRef.current.contains(event.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("podcast"), href: "/podcast" },
    { name: t("consulting"), href: "/consulting" },
    { name: t("contact"), href: "/contact" },
  ];

  const isNavActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--alt-color)/80 backdrop-blur-md shadow-lg py-1"
          : "bg-(--alt-color)"
      }`}
    >
      <nav className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo - مع حركة زووم بسيطة عند التحميل */}
        <Link
          href="/"
          className="w-20 outline-none transform transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul
            ref={menuRef}
            className={`transition-all duration-500 flex flex-col md:flex-row items-center absolute md:relative top-full md:top-0 left-0 bg-amber-50 md:bg-transparent w-full h-[calc(100vh-80px)] md:h-auto ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto"
            }`}
          >
            {navLinks.map((link, index) => {
              const isActive = isNavActive(link.href);
              return (
                <li key={link.href} className="w-full md:w-fit overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative block py-3 px-5 font-bold transition-all group ${
                      isActive
                        ? "text-(--main-color)"
                        : "text-slate-700 hover:text-(--main-color)"
                    }`}
                  >
                    {link.name}
                    {/* خط تحت الرابط يظهر عند الهوفر أو النشاط */}
                    <span
                      className={`absolute bottom-0 ${dir === "rtl" ? "right-5 md:right-1/2" : "left-10 md:left-1/2"} -translate-x-1/2 h-1 bg-(--main-color) transition-all duration-300 rounded-full ${isActive ? "w-10" : "w-0 group-hover:w-6"}`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center gap-1 md:gap-3">
          <div className="relative" ref={langRef}>
            <button
              disabled={isPending}
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                langOpen
                  ? "bg-(--main-color) text-white"
                  : "text-(--main-color) hover:bg-(--main-color)/10"
              } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Language size={20} />
              <span className="text-sm font-black hidden lg:block uppercase">
                {localActive}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* دروب داون اللغة مع أنميشن دخول */}
            <div
              className={`absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border border-rose-50 overflow-hidden transition-all duration-300 origin-top-right ${
                langOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <button
                onClick={() => onSelectChange("ar")}
                className={`w-full flex items-center justify-between px-5 py-4 text-sm font-bold transition-colors ${
                  localActive === "ar"
                    ? "bg-rose-50 text-(--main-color)"
                    : "text-slate-600 hover:bg-gray-50"
                }`}
              >
                <span>العربية</span>
                {localActive === "ar" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-(--main-color)"></div>
                )}
              </button>
              <button
                onClick={() => onSelectChange("en")}
                className={`w-full flex items-center justify-between px-5 py-4 text-sm font-bold transition-colors ${
                  localActive === "en"
                    ? "bg-rose-50 text-(--main-color)"
                    : "text-slate-600 hover:bg-gray-50"
                }`}
              >
                <span>English</span>
                {localActive === "en" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-(--main-color)"></div>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-center items-center rounded-xl md:hidden transition-all ${
              isOpen ? " text-slate-800 rotate-90 " : "text-(--main-color) "
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu2 size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
