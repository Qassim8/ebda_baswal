"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Contact Section */}
      <section className="py-16 bg-white min-h-screen" id="contact">
        <div className="container mx-auto px-5 md:px-0">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="w-fit mx-auto bg-pink-100 text-pink-600 text-sm font-bold px-5 py-1 rounded-md mb-5">
              تواصل معنا
            </h1>
            <p className="text-slate-800 font-bold text-4xl md:text-5xl">
              نحن هنا للاستماع إليك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-amber-50 p-8 rounded-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      رقم الهاتف
                    </h3>
                    <p className="text-slate-600">+249 150 124 8489</p>
                    <p className="text-slate-600">+249 123 456 7890</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-mail text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-slate-600">abda_b_soual@org.edu</p>
                    <p className="text-slate-600">support@abdabsoual.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-map-pin text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      الموقع
                    </h3>
                    <p className="text-slate-600">السودان - الخرطوم</p>
                    <p className="text-slate-600">ولاية الخرطوم، المركز</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ti ti-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      ساعات العمل
                    </h3>
                    <p className="text-slate-600">السبت - الخميس</p>
                    <p className="text-slate-600">9:00 صباحاً - 6:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                أرسل لنا رسالة
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block font-bold text-slate-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="اكتب اسمك الكامل"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-pink-600 focus:ring-2 focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-pink-600 focus:ring-2 focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="+249 XXX XXX XXXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-pink-600 focus:ring-2 focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    placeholder="ما موضوع رسالتك"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-pink-600 focus:ring-2 focus:outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full resize-none border border-gray-300 rounded-lg px-4 py-3 focus:ring-pink-600 focus:ring-2 focus:outline-none transition"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-pink-700 transition flex items-center justify-center gap-2"
                >
                  <i className="ti ti-send text-lg"></i>
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-amber-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              تابعنا على وسائل التواصل الاجتماعي
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-pink-600 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="ti ti-brand-facebook text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-pink-600 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="ti ti-brand-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-pink-600 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="ti ti-brand-instagram text-xl"></i>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-pink-600 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="ti ti-brand-telegram text-xl"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-pink-600 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="ti ti-brand-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.35.0/tabler-icons.min.css"
        rel="stylesheet"
      />
    </>
  );
}
