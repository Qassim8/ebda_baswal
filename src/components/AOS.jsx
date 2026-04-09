"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({
      // الإعدادات دي بتخلي الأنميشن ناعم جداً ومريح للعين
      duration: 1000, // مدة الأنميشن (ثانية واحدة)
      once: true, // الأنميشن يشتغل مرة واحدة بس وأنت نازل (عشان ما يشتتش المستخدم)
      easing: "ease-out-quad", // حركة ناعمة في النهاية
      delay: 100, // تأخير بسيط عالمي
      once: true, // مهم جداً: الأنميشن يحصل مرة واحدة فقط
      disableMutationObserver: false,
    });
  }, []);

  return null; // المكون ده وظيفته بس الـ Initialize مش بيفضل ظاهر
}
