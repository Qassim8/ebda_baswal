"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // بمجرد تغيير المسار، نرجع لـ 0,0 فوراً بدون Smooth
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
