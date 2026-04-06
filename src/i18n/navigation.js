// src/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { routingConfig } from "./routingConfig"; // استيراد الإعدادات من الملف الجديد

export const routing = routingConfig;

export const { Link, useRouter, usePathname } = createNavigation(routing);
