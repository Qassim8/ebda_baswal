// components/about/AboutSection.jsx
"use client";
import Image from "next/image";
import MainTitle from "../MainTitle";
import { useTranslations } from "next-intl";

export default function About({ about }) {
  const t = useTranslations("About");

  return (
    <section
      className={`py-20 ${about ? "bg-(--second-color)" : "bg-white"} overflow-hidden`}
      id="about"
    >
      <div className="container mx-auto px-3 md:px-0">
        {/* First Section: Images + Text */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Images - تحريك الصور من جهة اليمين أو اليسار حسب الـ Layout */}
          <div
            className="relative flex-1 order-last md:order-first w-full min-h-100"
            data-aos="fade-right" // الصورة الكبيرة بتتحرك من الجنب بنعومة
            data-aos-duration="1200"
          >
            <div
              className="absolute top-32 md:top-25 right-0 md:right-37.5 z-10 
                       rounded-md w-[70%]"
            >
              <Image
                src="/Consulting-1024x644.jpg"
                alt="Professional Consultation"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-md object-cover shadow-lg"
              />
            </div>

            {/* الصورة الصغيرة بتتحرك بتأخير بسيط عشان تدي عمق */}
            <div
              className="h-full mt-60 md:me-50
                        rounded-md z-10 relative w-[70%] md:w-1/2"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                src="/Planning-for-New-Financial-Year.png"
                alt="Career Planning"
                width={400}
                height={300}
                loading="lazy"
                className="rounded-lg object-cover  border-white"
              />
            </div>
          </div>

          {/* Text Content - بيتحرك من الجهة المقابلة للصور */}
          <div className="flex-1" data-aos="fade-left" data-aos-duration="1200">
            <MainTitle
              title={t("title")}
              subtitle={t("description")}
              fullwidth={1}
            />
            <p className="text-slate-600 md:text-xl leading-relaxed">
              <span className="text-(--main-color) font-bold">
                {t("title")}
              </span>{" "}
              {t("mainDescription")}
            </p>
          </div>
        </div>

        {about && (
          <>
            {/* Second Section: Additional Text + Image */}
            <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-5">
              <div
                className="flex-1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="text-slate-600 md:text-xl leading-relaxed">
                  {t("additionalDescription")}
                </p>
              </div>

              <div
                className="flex-1 w-full"
                data-aos="zoom-in-up" // تأثير زووم خفيف للصورة الثانية
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src="/about-2.jpg"
                  alt="Workshop"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="rounded-md object-cover shadow-lg"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
