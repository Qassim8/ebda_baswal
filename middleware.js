// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routingConfig } from "./src/i18n/routingConfig"; // الاستيراد من ملف الإعدادات النظيف

export default createMiddleware({
  locales: routingConfig.locales,
  defaultLocale: routingConfig.defaultLocale,
});

export const config = {
  // Matcher المعدل لاستبعاد الملفات الثابتة بشكل أفضل
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
