import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcf4ed] text-slate-800 pt-10">
      <div className="container mx-auto px-3 md:px-0 pb-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div className="col-span-1">
          <Image
            src="/logo.png"
            alt="ابدأ بسؤال"
            width={96}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            منصة تهدف إلى تبسيط المعرفة، وتحفيز التفكير، وتمكين الشباب من خلال
            مشاركة المحتوى والإرشاد العملي.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-lg font-semibold mb-3">روابط مهمة</h3>
          <ul className="space-y-2 text-sm">
            {["الرئيسية", "من نحن", "خدماتنا", "التواصل"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="relative inline-block text-slate-800 transition-colors duration-300 hover:text-(--main-color) 
                             before:absolute before:bottom-0 before:inset-s-0 before:h-0.5 before:w-0 
                             before:bg-(--main-color) before:transition-all before:duration-300 hover:before:w-full pb-2"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* خدماتنا */}
        <div>
          <h3 className="text-lg font-semibold mb-3">خدماتنا</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="hover:text-(--main-color) transition-colors"
              >
                جلسات استشارية
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-(--main-color) transition-colors"
              >
                بودكاست مسارك
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-(--main-color) transition-colors"
              >
                فرص تطوعية
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-(--main-color) transition-colors"
              >
                دورات تدريبية
              </Link>
            </li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div>
          <h3 className="text-lg font-semibold mb-3">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <i className="ti ti-phone text-(--main-color)"></i>
              <span dir="ltr">+249 150 124 8489</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ti ti-mail text-(--main-color)"></i>
              <span>abda_b_soual@org.edu</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ti ti-map-pin text-(--main-color)"></i>
              <span>السودان - الخرطوم</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Rights */}
      <div className="text-slate-800 bg-(--alt-color) mt-10 py-5 text-center text-sm font-medium">
        © {currentYear} ابدأ بسؤال. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
