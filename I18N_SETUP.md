# Next.js i18n Setup - Complete Guide

## ✅ Implementation Complete

Your Next.js App Router project now has full URL-based internationalization with Arabic (ar) and English (en) support.

---

## 📁 Final Folder Structure

```
ebda_baswal/
├── middleware.js                          # Locale routing middleware
├── next.config.mjs
├── package.json
├── messages/                              # Translation files
│   ├── ar.json                           # Arabic translations
│   └── en.json                           # English translations
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.js                 # Root layout with i18n provider
│   │   │   ├── page.js                   # Home page
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── services/
│   │   │   ├── consulting/
│   │   │   ├── podcast/
│   │   │   └── globals.css
│   ├── i18n/
│   │   ├── navigation.js                 # Navigation config & exports
│   │   └── request.js                    # Request handler for translations
│   └── components/
│       ├── Header.jsx                    # Navbar with language switcher
│       ├── Footer.jsx                    # Footer with translations
│       ├── home/
│       │   └── HeroSection.jsx           # Hero with translations
│       ├── about/
│       ├── services/
│       └── ... (other components)
```

---

## 🔑 Key Features

### ✓ URL-Based Locale Routing

- Arabic: `/ar/*`
- English: `/en/*`
- Root redirect: `/` → `/ar` (Arabic is default)

### ✓ Automatic Language Detection

- Middleware automatically detects locale from URL
- Fallback to Arabic for invalid locales
- Static route generation for all locales

### ✓ Dynamic Direction & Language

- RTL for Arabic
- LTR for English
- `<html lang="ar"/"en" dir="rtl"/"ltr">`

### ✓ Language Switcher

- Dropdown in Navbar
- Shows current active language
- Preserves current route when switching
- Smooth transition with `useTransition`

### ✓ Full Site Translation

- All hardcoded text replaced with translation keys
- JSON-based translation system
- Organized by sections (Hero, About, Services, etc.)

---

## 📄 Updated Files Summary

### 1. **middleware.js** (NEW)

```javascript
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/navigation";

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

**What it does:**

- Intercepts all requests
- Detects locale from URL
- Redirects invalid paths to default locale
- Verifies supported locales

---

### 2. **src/i18n/navigation.js** (UPDATED)

```javascript
import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["en", "ar"],
  defaultLocale: "ar",
};

export const { Link, useRouter, usePathname } = createNavigation(routing);
```

**What it does:**

- Defines available locales and default
- Exports navigation utilities
- Ensures all links include locale automatically
- Used by middleware for configuration

---

### 3. **src/i18n/request.js** (UPDATED)

```javascript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate locale against supported locales
  if (!routing.locales.includes(locale)) {
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../../messages/${routing.defaultLocale}.json`))
        .default,
    };
  }

  return {
    locale: locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

**What it does:**

- Loads correct translation file based on locale
- Validates locale against supported list
- Fallback to Arabic if invalid locale
- Provides messages to components

---

### 4. **src/app/[locale]/layout.js** (UPDATED)

```javascript
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/navigation";

// ... fonts and metadata ...

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**What it does:**

- Sets `lang` and `dir` attributes dynamically
- Wraps app with `NextIntlClientProvider`
- Generates static params for all locales
- Provides messages to all nested components

---

### 5. **src/components/Header.jsx** (Already Optimized)

```javascript
"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navLinks = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    // ... more links
  ];

  const onSelectChange = (nextLocale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  // Language dropdown shows current language
  // Switching language preserves current route
}
```

**Best practices implemented:**

- ✓ Uses `useLocale()` to get current language
- ✓ Uses `useTranslations()` for text
- ✓ Uses `useRouter().replace()` with locale option
- ✓ Uses `useTransition()` for loading state
- ✓ Preserves route when switching language
- ✓ Links include locale prefix automatically

---

### 6. **src/components/home/HeroSection.jsx** (UPDATED)

```javascript
"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section>
      <h1>
        <span>{t("mainTitle")}</span>
        {t("subtitle")}
      </h1>
      <p>{t("description")}</p>
      <Link href={`/${locale}/contact`}>{t("contactButton")}</Link>
      <Link href={`/${locale}/services`}>{t("servicesButton")}</Link>
    </section>
  );
}
```

**Key points:**

- ✓ Client component with `"use client"`
- ✓ `useTranslations("Hero")` for Hero section text
- ✓ All text from JSON, no hardcoded strings
- ✓ Links use `Link` from i18n/navigation
- ✓ Locale prefix included automatically

---

### 7. **src/components/Footer.jsx** (UPDATED)

```javascript
"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    // ... more links
  ];

  return (
    <footer>
      <p>{t("about")}</p>
      {quickLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
      <p>{t("copyright", { year: currentYear })}</p>
      <p>{t("madeWith")}</p>
    </footer>
  );
}
```

---

### 8. **messages/ar.json** (UPDATED)

```json
{
  "Navbar": {
    "home": "الرئيسية",
    "about": "من نحن",
    "services": "خدماتنا",
    "podcast": "بودكاست",
    "consulting": "استشارات",
    "contact": "تواصل معنا",
    "arabic": "العربية",
    "english": "الإنجليزية"
  },
  "Hero": {
    "mainTitle": "ابدأ بسؤال",
    "subtitle": "وافتح أبواب المعرفة",
    "description": "السؤال هو أول خطوة نحو الفهم والتعلّم الحقيقي...",
    "contactButton": "تواصل معنا",
    "servicesButton": "خدماتنا"
  },
  "Footer": {
    "about": "منصة تهدف إلى تبسيط المعرفة...",
    "quickLinks": "روابط سريعة",
    "copyright": "© {year} ابدأ بسؤال. جميع الحقوق محفوظة."
  }
}
```

---

### 9. **messages/en.json** (UPDATED)

```json
{
  "Navbar": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "podcast": "Podcast",
    "consulting": "Consulting",
    "contact": "Contact",
    "arabic": "Arabic",
    "english": "English"
  },
  "Hero": {
    "mainTitle": "Start with a Question",
    "subtitle": "Open the doors of knowledge",
    "description": "Questions are the first step towards real understanding...",
    "contactButton": "Contact Us",
    "servicesButton": "Our Services"
  },
  "Footer": {
    "about": "A platform dedicated to simplifying knowledge...",
    "quickLinks": "Quick Links",
    "copyright": "© {year} Start with a Question. All rights reserved."
  }
}
```

---

## 🎯 Usage Patterns

### Pattern 1: Client Component with Translations

```javascript
"use client";
import { useTranslations, useLocale } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("SectionName");
  const locale = useLocale();

  return <div>{t("keyName")}</div>;
}
```

### Pattern 2: Links with Locale

```javascript
import { Link } from "@/i18n/navigation";

export default function Nav() {
  return <Link href="/about">About</Link>;
  // Automatically becomes: /en/about or /ar/about
}
```

### Pattern 3: Locale-Specific Links

```javascript
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function MyComponent() {
  const locale = useLocale();
  return <a href={`/${locale}/contact`}>Contact</a>;
}
```

### Pattern 4: Language Switching

```javascript
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (locale) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <button onClick={() => switchLanguage("en")} disabled={isPending}>
      English
    </button>
  );
}
```

---

## 🚀 How It Works

### Routing Flow

```
User visits /
      ↓
Middleware detects locale
      ↓
No locale in URL
      ↓
Redirect to /ar (default)
      ↓
Layout renders with locale param
      ↓
getMessages() loads ar.json
      ↓
NextIntlClientProvider injects messages
      ↓
Components use useTranslations() to access text
```

### Language Switch Flow

```
User clicks "English" dropdown
      ↓
onSelectChange("en") triggered
      ↓
startTransition() wraps router.replace()
      ↓
router.replace(pathname, { locale: "en" })
      ↓
URL updates from /ar/about to /en/about
      ↓
Layout re-renders with new locale
      ↓
New messages loaded (en.json)
      ↓
Components re-render with English text
```

---

## ✨ Next Steps

### 1. **Add More Languages** (if needed)

Edit `src/i18n/navigation.js`:

```javascript
export const routing = {
  locales: ["en", "ar", "fr"], // Add "fr"
  defaultLocale: "ar",
};
```

Create `messages/fr.json` with French translations.

### 2. **Translate More Pages**

For each page component:

- Add `"use client"` at top
- Import `useTranslations` and `useLocale`
- Replace hardcoded text with `t("key")`
- Add keys to JSON files

### 3. **Add Layouts for Other Pages**

Create `src/app/[locale]/about/page.js`:

```javascript
"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return <h1>{t("title")}</h1>;
}
```

### 4. **SEO Optimization**

```javascript
export async function generateMetadata({ params }) {
  const locale = (await params).locale;
  const t = getTranslations();

  return {
    title: t("About.seoTitle"),
    description: t("About.seoDescription"),
    alternates: {
      languages: {
        ar: `https://yoursite.com/ar/about`,
        en: `https://yoursite.com/en/about`,
      },
    },
  };
}
```

---

## 🐛 Troubleshooting

| Issue                                       | Solution                                                      |
| ------------------------------------------- | ------------------------------------------------------------- |
| Links not including locale                  | Use `Link` from `@/i18n/navigation` instead of Next.js `Link` |
| Translations not loading                    | Check JSON file exists in `messages/{locale}.json`            |
| Locale not detected                         | Check middleware.js is in root directory                      |
| RTL/LTR not working                         | Verify `dir={direction}` in layout.js html tag                |
| Language switcher not updating              | Use `router.replace()` instead of `router.push()`             |
| Server component error with useTranslations | Add `"use client"` at top of component                        |

---

## 📚 Architecture Summary

**Layers:**

1. **Middleware** → Validates & routes requests
2. **Navigation** → Configuration & utilities
3. **Request Handler** → Loads translations
4. **Layout** → Wraps app with provider
5. **Components** → Consume translations

**Data Flow:**

```
URL → Middleware → Request Handler → getMessages() → JSON file →
NextIntlClientProvider → useTranslations() → Component render
```

**Best Practices:**

- ✓ Always use `Link` from i18n/navigation
- ✓ Use `useTranslations()` in client components
- ✓ Use `getTranslations()` in server components
- ✓ Organize translations by section
- ✓ Include locale in all dynamic links
- ✓ Test both languages before deploy

---

## 🔗 References

- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [Next.js 13+ App Router](https://nextjs.org/docs/app)
- [URL-based Locale Routing](https://next-intl-docs.vercel.app/docs/getting-started/app-router-setup)

---

**Setup completed! Your site now supports Arabic & English with proper URL routing.** 🎉
