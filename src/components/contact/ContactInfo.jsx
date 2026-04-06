import { Mail, BrandWhatsapp, MapPin, Clock } from "tabler-icons-react";
import { useTranslations } from "next-intl";

const contactMethodsData = [
  {
    icon: <BrandWhatsapp size={32} />,
    key: "whatsapp",
    link: "https://wa.me/yournumber",
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    icon: <Mail size={32} />,
    key: "email",
    link: "mailto:info@razantalks.com",
    color: "bg-rose-50 text-(--main-color) border-rose-100",
  },
  {
    icon: <Clock size={32} />,
    key: "hours",
    link: "#",
    color: "bg-blue-50 text-blue-600 border-blue-100",
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
              className={`p-8 rounded-[2rem] border-2 flex flex-col items-center text-center transition-all hover:-translate-y-2 ${method.color}`}
            >
              <div className="mb-4">{method.icon}</div>
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
