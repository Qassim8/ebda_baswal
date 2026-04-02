import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/navigation";

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export const config = {
  // Match all pathnames except for
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
