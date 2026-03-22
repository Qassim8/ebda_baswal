"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "الخدمات" },
    { href: "/consult", label: "الاستشارة" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="bg-alt sticky top-0 shadow-md z-50">
      <nav className="container mx-auto px-3 md:px-0 flex justify-between items-center">
        <Link href="/" className="w-20 md:w-24 outline-none">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={80}
            className="max-w-full"
          />
        </Link>

        <div className="flex items-center">
          <ul
            className={`transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-y-4 pointer-events-none md:!opacity-100 md:!scale-100 md:!translate-y-0 md:!pointer-events-auto"
            } md:!flex flex-1 flex-col md:flex-row md:justify-between items-center gap-7 md:gap-5 absolute md:relative top-full md:top-0 left-0 bg-amber-50 w-full h-screen md:h-0`}
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-center w-full md:w-fit text-main py-5 px-3 font-bold border-b-3 border-main md:border-0 transition-colors duration-300 hover:text-main"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="cursor-pointer">
            <i className="ti ti-language text-2xl text-main"></i>
          </div>
          <div
            className="menu-btn flex justify-center items-center w-8 h-8 text-main transition-colors duration-500 ease-in-out cursor-pointer border rounded-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="ti ti-menu-2 text-lg md:text-2xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
