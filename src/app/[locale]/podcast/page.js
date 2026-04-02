"use client";
import { useTranslations } from "next-intl";

export default function PodcastPage() {
  const t = useTranslations("Podcast");

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-slate-600 mb-12">{t("description")}</p>

          {/* Placeholder for podcast episodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((episode) => (
              <div
                key={episode}
                className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-40 bg-slate-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-600">Episode {episode}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Episode {episode} Title
                </h3>
                <p className="text-slate-600 mb-4">
                  Listen to our latest insights and expert conversations
                </p>
                <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 rounded-lg transition-colors">
                  Listen Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
