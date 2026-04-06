"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Language, Menu2, X, ChevronDown } from "tabler-icons-react";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isPending, startTransition] = useTransition(); // لإدارة حالة التحميل أثناء النقل

  const pathname = usePathname();
  const router = useRouter();
  const localActive = useLocale(); // يجلب اللغة الحالية (ar أو en)
  const t = useTranslations("Navbar"); // لاستخدام النصوص المترجمة في المنيو

  const menuRef = useRef(null);
  const langRef = useRef(null);

  // دالة تغيير اللغة الذكية
  const onSelectChange = (nextLocale) => {
    if (nextLocale === localActive) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });

    setLangOpen(false);
  };

  // إغلاق القوائم عند الضغط بالخارج
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

  // Check if nav item is active (handles root path correctly)
  const isNavActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-(--alt-color) sticky top-0 shadow-md z-50 font-sans">
      <nav className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-20 outline-none">
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
            className={`transition-all duration-500 flex flex-col md:flex-row items-center absolute md:relative top-full md:top-0 left-0 bg-amber-50 md:bg-transparent w-full h-[calc(100vh-80px)] md:h-auto ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto"}`}
          >
            {navLinks.map((link) => {
              const isActive = isNavActive(link.href);
              return (
                <li key={link.href} className="w-full md:w-fit">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-5 px-8 font-bold transition-all ${isActive ? "bg-(--main-color) text-white" : "text-slate-700 hover:text-(--main-color)"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative" ref={langRef}>
            <button
              disabled={isPending}
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${langOpen ? "bg-(--main-color) text-white" : "text-(--main-color) hover:bg-white/50"} ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Language size={20} />
              <span className="text-sm font-black hidden md:block">
                {localActive === "ar" ? t("arabic") : t("english")}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-rose-50 overflow-hidden transition-all ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <button
                onClick={() => onSelectChange("ar")}
                className={`w-full flex items-center gap-3 px-4 py-4 text-sm font-bold transition-colors border-b border-rose-50 ${localActive === "ar" ? "bg-rose-50 text-(--main-color)" : "text-slate-600 hover:bg-gray-50"}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${localActive === "ar" ? "bg-(--main-color)" : "bg-gray-200"}`}
                ></span>{" "}
                {t("arabic")}
              </button>
              <button
                onClick={() => onSelectChange("en")}
                className={`w-full flex items-center gap-3 px-4 py-4 text-sm font-bold transition-colors ${localActive === "en" ? "bg-rose-50 text-(--main-color)" : "text-slate-600 hover:bg-gray-50"}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${localActive === "en" ? "bg-(--main-color)" : "bg-gray-200"}`}
                ></span>{" "}
                {t("english")}
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-center items-center w-8 h-8 rounded-lg md:hidden transition-all ${isOpen ? "bg-(--main-color) text-white rotate-90" : "bg-white text-(--main-color) shadow-sm"}`}
          >
            {isOpen ? <X size={20} /> : <Menu2 size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
