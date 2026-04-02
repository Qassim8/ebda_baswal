"use client";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 mb-12">{t("description")}</p>

          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="+249..."
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("email")}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("address")}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="Your location"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
