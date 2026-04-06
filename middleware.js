// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routingConfig } from "./i18n/config";

export default createMiddleware({
  // تأكد من تمرير القيم مباشرة هنا
  locales: routingConfig.locales,
  defaultLocale: routingConfig.defaultLocale,
  localePrefix: "always", // جرب إضافة هذا الخيار لضمان التوجيه الصحيح
});

export const config = {
  // هذا الـ Matcher مهم جداً لاستبعاد ملفات النظام
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
