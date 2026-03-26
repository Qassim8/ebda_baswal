"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Language, Menu2, X, ChevronDown } from "tabler-icons-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "كلام رزان", href: "/podcast" },
  { name: "الاستشارة", href: "/consulting" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // State لقائمة اللغة
  const pathname = usePathname();
  const menuRef = useRef(null);
  const langRef = useRef(null); // Ref لقائمة اللغة

  // إغلاق القوائم عند الضغط بالخارج
  useEffect(() => {
    const onOutsideClick = (event) => {
      // إغلاق منيو الموبايل
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      // إغلاق منيو اللغة
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  return (
    <header className="bg-(--alt-color) sticky top-0 shadow-md z-50 font-sans">
      <nav className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-20 md:w-24 outline-none">
          <Image
            src="/logo.png"
            alt="ابدأ بسؤال"
            width={120}
            height={70}
            priority
            className="max-w-full h-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul
            ref={menuRef}
            className={`
              transition-all duration-500 ease-in-out 
              flex flex-col md:flex-row items-center gap-2 md:gap-1 
              absolute md:relative top-full md:top-0 left-0 
              bg-amber-50 md:bg-transparent w-full h-[calc(100vh-80px)] md:h-auto
              ${
                isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto shadow-none"
              }
            `}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="w-full md:w-fit">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block py-6 md:py-2 px-4 font-bold md:rounded-lg transition-all duration-300
                      ${
                        isActive
                          ? "bg-(--main-color) text-white md:shadow-lg md:shadow-(--main-color)/20"
                          : "text-slate-700 hover:text-(--main-color) hover:bg-(--main-color)/5"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Icons & Actions */}
        <div className="flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`
                flex items-center gap-1 cursor-pointer px-3 py-2 rounded-xl transition-all duration-300
                ${langOpen ? "bg-(--main-color) text-white" : "bg-(--alt-color) text-(--main-color) hover:bg-(--alt-color)"}
              `}
            >
              <Language size={20} />
              <span className="text-sm font-black hidden md:block">
                العربية
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* القائمة المنسدلة للغة */}
            <div
              className={`
              absolute left-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-rose-50 overflow-hidden transition-all duration-300 origin-top-left
              ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
            >
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-rose-50 hover:text-(--main-color) transition-colors border-b border-rose-50">
                <span className="w-2 h-2 rounded-full bg-(--main-color)"></span>{" "}
                العربية
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 hover:bg-rose-50 hover:text-(--main-color) transition-colors">
                <span className="w-2 h-2 rounded-full bg-slate-200"></span>{" "}
                English
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              flex justify-center items-center w-10 h-10 
              transition-all duration-300 cursor-pointer 
              rounded-xl md:hidden
              ${isOpen ? "bg-(--main-color) text-white rotate-90" : "bg-(--alt-color) text-(--main-color)"}
            `}
          >
            {isOpen ? <X size={24} /> : <Menu2 size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
