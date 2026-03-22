import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "التواصل", href: "#footer" },
  ];

  return (
    <footer className="bg-orange-100 text-slate-800 pt-10" id="footer">
      <div className="container mx-auto px-3 md:px-0 pb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="col-span-1">
          <Image src="/images/logo.png" alt="ابدأ بسؤال" width={96} height={80} className="w-24 mb-4" />
          <p className="text-sm leading-relaxed">منصة تهدف إلى تبسيط المعرفة، وتحفيز التفكير، وتمكين الشباب...</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">روابط مهمة</h3>
          <ul className="space-y-2 text-sm">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="relative inline-block text-slate-800 transition-colors duration-300 hover:text-pink-600">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">خدماتنا</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-600">جلسات استشارية</a></li>
            <li><a href="#" className="hover:text-pink-600">بودكاست مسارك</a></li>
            <li><a href="#" className="hover:text-pink-600">فرص تطوعية</a></li>
            <li><a href="#" className="hover:text-pink-600">دورات تدريبية</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li><i className="ti ti-phone ms-5"></i> <span>+249 150 124 8489</span></li>
            <li>abda_b_soual@org.edu <i className="ti ti-mail me-1"></i></li>
            <li><i className="ti ti-map-pin me-1"></i> السودان - الخرطوم</li>
          </ul>
        </div>
      </div>

      <div className="text-slate-800 bg-orange-200 mt-10 py-5 text-center text-sm">© 2025 ابدأ بسؤال. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
