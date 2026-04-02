import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: false, // 🔥 أهم سطر
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
