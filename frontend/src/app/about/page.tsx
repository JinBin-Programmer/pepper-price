import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Pepper Price Malaysia",
  description:
    "About Pepper Price Malaysia — a free tool tracking daily Black and White Pepper prices from the Malaysia Pepper Board (MPB).",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-4">
      <div className="bg-white/90 border border-green-100 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-xl shadow-md">🌿</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">About Pepper Price Malaysia</h1>
            <p className="text-sm text-gray-400">Daily prices from MPB · Updated every 6 hours</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Pepper Price Malaysia</strong> provides free, up-to-date pepper prices in Malaysian Ringgit (MYR) for Black Pepper Sarawak (BPS) and White Pepper Sarawak (WPS) — sourced directly from the Malaysia Pepper Board (MPB).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you&apos;re a trader, exporter, farmer, or buyer comparing wholesale prices — this site gives you the official reference rates in one clean, fast interface.
        </p>
      </div>

      {[
        { icon: "📡", title: "Data Source", body: "Prices are sourced from the Malaysia Pepper Board (mpb.gov.my). MPB is the official government body responsible for the regulation, development, and promotion of the pepper industry in Malaysia. Prices are updated on the MPB site periodically and we refresh our data every 6 hours." },
        { icon: "⚫", title: "Black Pepper Sarawak (BPS)", body: "BPS is oven-dried black pepper from Sarawak. FAQ (Fair Average Quality) is the standard traded grade. Sarawak black pepper is prized globally for its consistent quality, bold flavour, and distinctive aroma. Malaysia is one of the world's top pepper exporters." },
        { icon: "⚪", title: "White Pepper Sarawak (WPS)", body: "WPS is produced from the same pepper berry as black pepper, but soaked in water for several days to remove the outer skin (pericarp). This produces a milder flavour with less heat. It is popular in Asian cuisines and light-coloured sauces." },
        { icon: "⚠️", title: "Disclaimer", body: "All prices shown are reference prices from MPB and are for informational purposes only. Actual trader and retail prices will vary depending on grade, quantity, packaging, and market conditions. We are not responsible for any trade decisions made based on this data." },
      ].map((s) => (
        <div key={s.title} className="bg-white/90 border border-green-100 rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{s.icon}</span>
            <h2 className="font-bold text-gray-800">{s.title}</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
        </div>
      ))}

      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="text-green-600 hover:underline">← Live Prices</Link>
        <span className="text-gray-300">·</span>
        <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>
        <span className="text-gray-300">·</span>
        <Link href="/terms" className="text-green-600 hover:underline">Terms</Link>
      </div>
    </main>
  );
}
