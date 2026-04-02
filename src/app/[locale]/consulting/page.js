"use client";
import { useTranslations } from "next-intl";

export default function ConsultingPage() {
  const t = useTranslations("Consulting");

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 text-center">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 mb-12 text-center">
            {t("description")}
          </p>

          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("form.name")}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("form.email")}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("form.phone")}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="+249..."
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                {t("form.message")}
              </label>
              <textarea
                rows="6"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-rose-500"
                placeholder="Tell us about your consultation needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {t("submitButton")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
