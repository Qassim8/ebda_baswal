"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. أول ما المسار يتغير (بدأ التنقل)
    setIsVisible(true);

    // 2. بنعمل "تايمر" عشان نضمن إن اللودر يفضل ظاهر على الأقل 800ms
    // ده بيمنع الرعشة وبيخلي المستخدم يشوف اللوجو بتاعك بوضوح
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* اللوجو بيلف بنعومة */}
        <div className="animate-spin duration-[1500ms]">
          <Image
            src="/bg-logo-removebg-preview.png"
            alt="Loading..."
            width={120}
            height={120}
            priority
          />
        </div>

        {/* لمسة إضافية: أنميشن نبض خفيف تحت اللوجو */}
        <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-(--main-color) animate-progress-loading"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress-loading {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 0%;
            transform: translateX(100%);
          }
        }
        .animate-progress-loading {
          animation: progress-loading 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
