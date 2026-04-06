import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // اكتب القيم هنا مباشرة بدون استيراد من ملفات أخرى لضمان الاستقرار
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always",
});

export const config = {
  // هذا الـ Matcher هو "صمام الأمان" لعدم انهيار السيرفر
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
