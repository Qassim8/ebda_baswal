import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["en", "ar"],
  defaultLocale: "ar",
};

export const { Link, useRouter, usePathname } = createNavigation(routing);
