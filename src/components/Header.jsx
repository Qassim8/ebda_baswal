"use client"; // ضروري لأننا بنستخدم useState و onClick

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Language, Menu2, X } from "tabler-icons-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "الاستشارة", href: "/consult" },
  { name: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  return (
    <header className="bg-(--alt-color) sticky top-0 shadow-md z-50">
      <nav className="container mx-auto px-3 md:px-0 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-20 md:w-24 outline-none">
          <Image
            src="/logo.png"
            alt="ابدأ بسؤال"
            width={100}
            height={60}
            priority
            className="max-w-full h-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul
            ref={menuRef}
            className={`
              transition-all duration-300 ease-in-out 
              flex flex-col md:flex-row items-center gap-1 md:gap-3 
              absolute md:relative top-full md:top-0 left-0 
              bg-amber-50 md:bg-transparent w-full h-screen md:h-auto
              ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 md:opacity-100 scale-95 md:scale-100 translate-y-4 md:translate-y-0 pointer-events-none md:pointer-events-auto"
              }
            `}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="w-full md:w-fit text-center">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // نقفل المنيو بعد الضغط في الموبايل
                    className={`
                      block py-5 px-3 font-bold md:border-b-2 transition-all duration-500
                      ${
                        isActive
                          ? "text-(--main-color) border-(--main-color)"
                          : "text-slate-800 border-transparent hover:text-(--main-color) hover:border-(--main-color)"
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

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer p-2 rounded-md hover:bg-amber-100 transition-colors duration-300"
            aria-label="تبديل اللغة"
          >
            <Language size={24} className="text-(--main-color)" />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className={`
              flex justify-center items-center w-8 h-8 
              transition-colors duration-500 ease-in-out cursor-pointer 
              border rounded-sm md:hidden
              ${isOpen ? "bg-(--main-color) text-(--alt-color)" : "text-(--main-color) border-(--main-color)"}
            `}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X size={20} /> : <Menu2 size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
