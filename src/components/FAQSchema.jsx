// components/FAQSchema.jsx
import { useTranslations } from "next-intl";

export default function FAQSchema() {
  const t = useTranslations("FAQ");

  const questionIndexes = [0, 1, 2, 3, 4, 5];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questionIndexes.map((index) => ({
      "@type": "Question",
      name: t(`questions.${index}.q`), // بيسحب السؤال حسب اللغة الحالية
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`questions.${index}.a`), // بيسحب الإجابة حسب اللغة الحالية
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
