import { Mail, BrandWhatsapp, MapPin, Clock } from "tabler-icons-react";
import { useTranslations } from "next-intl";

const contactMethodsData = [
  {
    icon: <BrandWhatsapp size={32} />,
    key: "whatsapp",
    link: "https://wa.me/yournumber",
    color: "bg-green-50 text-green-600 border-green-100 hover:border-green-400",
  },
  {
    icon: <Mail size={32} />,
    key: "email",
    link: "mailto:info@razantalks.com",
    color:
      "bg-rose-50 text-(--main-color) border-rose-100 hover:border-rose-400",
  },
  {
    icon: <Clock size={32} />,
    key: "hours",
    link: "#",
    color: "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-400",
  },
];

export function ContactCards() {
  const t = useTranslations("ContactInfo");

  return (
    <section className="py-20 bg-(--second-color)">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethodsData.map((method, i) => (
            <a
              href={method.link}
              key={i}
              // أنميشن فيد أب مع تأخير متزايد (400ms لكل كرت)
              data-aos="fade-up"
              data-aos-delay={i * 400}
              // تم استخدام transition-transform حصراً لضمان نعومة الهوفر مع AOS
              className={`p-8 rounded-[2rem] border-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 ${method.color}`}
            >
              <div className="mb-4 transition-transform duration-500 hover:scale-110">
                {method.icon}
              </div>
              <h3 className="font-black text-slate-800 mb-1">
                {t(`${method.key}.title`)}
              </h3>
              <p className="text-sm font-bold opacity-80 leading-relaxed">
                {t(`${method.key}.value`)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
