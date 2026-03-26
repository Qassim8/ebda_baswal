import { Mail, BrandWhatsapp, MapPin, Clock } from "tabler-icons-react";

const contactMethods = [
  {
    title: "تواصل عبر الواتساب",
    value: "+249 000 000 000",
    icon: <BrandWhatsapp size={32} />,
    link: "https://wa.me/yournumber",
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    title: "البريد الإلكتروني",
    value: "info@razantalks.com",
    icon: <Mail size={32} />,
    link: "mailto:info@razantalks.com",
    color: "bg-rose-50 text-(--main-color) border-rose-100",
  },
  {
    title: "ساعات العمل",
    value: "الأحد - الخميس (9ص - 5م)",
    icon: <Clock size={32} />,
    link: "#",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
];

export function ContactCards() {
  return (
    <section className="py-20 bg-(--second-color)">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => (
            <a
              href={method.link}
              key={i}
              className={`p-8 rounded-[2rem] border-2 flex flex-col items-center text-center transition-all hover:-translate-y-2 ${method.color}`}
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="font-black text-slate-800 mb-1">{method.title}</h3>
              <p className="text-sm font-bold opacity-80 leading-relaxed">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
