import type { Metadata } from "next";
import { getPepperData } from "@/lib/pepper";
import PriceCard from "@/components/PriceCard";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";

export const revalidate = 21600; // 6 hours

export const metadata: Metadata = {
  title: "Pepper Price Malaysia — Daily MPB Rates",
  description:
    "Today's Malaysia Pepper Board (MPB) prices for Black Pepper Sarawak (BPS) and White Pepper Sarawak (WPS) in RM per tonne and RM per kg.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function HomePage() {
  const data = await getPepperData();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Hero */}
      <div className="animate-in text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          {data.is_fallback ? "Showing reference prices" : "Live from MPB"}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Pepper Price Malaysia
        </h1>
        <p className="text-gray-500 text-sm">
          Daily prices from the Malaysia Pepper Board (MPB)
        </p>
      </div>

      {/* Split hero banner */}
      <div className="rounded-2xl overflow-hidden shadow-md h-44 flex animate-in">
        {/* Left — Black Pepper */}
        <div className="w-1/2 bg-gray-950 relative flex flex-col items-center justify-center gap-1 p-5">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6b7280 1.2px, transparent 1.2px)",
              backgroundSize: "14px 14px",
            }}
          />
          <span className="text-5xl relative">🫙</span>
          <p className="relative text-white font-extrabold text-sm tracking-wide">
            Black Pepper
          </p>
          <p className="relative text-gray-400 text-xs font-medium">
            BPS Sarawak
          </p>
        </div>

        {/* Divider */}
        <div className="w-px bg-gradient-to-b from-gray-700 via-gray-400 to-gray-200 flex-shrink-0" />

        {/* Right — White Pepper */}
        <div className="w-1/2 bg-white relative flex flex-col items-center justify-center gap-1 p-5">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #9ca3af 1.2px, transparent 1.2px)",
              backgroundSize: "14px 14px",
            }}
          />
          <span className="text-5xl relative">🌾</span>
          <p className="relative text-gray-800 font-extrabold text-sm tracking-wide">
            White Pepper
          </p>
          <p className="relative text-gray-400 text-xs font-medium">
            WPS Sarawak
          </p>
        </div>
      </div>

      {/* Price Cards */}
      <div className="grid sm:grid-cols-2 gap-4 animate-in delay-1">
        {data.prices.map((p, i) => (
          <PriceCard key={p.code} price={p} index={i} />
        ))}
      </div>

      {/* Last updated — below price cards */}
      <p className="text-center text-xs text-gray-400">
        Last updated: {formatDate(data.last_updated)} (MYT)
      </p>

      {/* Ad */}
      <AdBanner slot="1111111111" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 gap-4 animate-in delay-2">
        {[
          {
            icon: "🌿",
            title: "What is BPS?",
            body: "Black Pepper Sarawak (BPS) is oven-dried black pepper from Sarawak, Malaysia — one of the world's premium pepper origins. FAQ grade is the standard traded grade.",
          },
          {
            icon: "⚪",
            title: "What is WPS?",
            body: "White Pepper Sarawak (WPS) comes from the same pepper berry as black pepper but is soaked and the outer skin removed. It is milder and preferred in lighter-coloured dishes.",
          },
          {
            icon: "📊",
            title: "How Are Prices Set?",
            body: "MPB publishes official reference prices periodically. These are indicative prices for trade reference. Actual dealer prices may vary depending on grade, quantity, and market conditions.",
          },
          {
            icon: "🇲🇾",
            title: "Sarawak Pepper",
            body: "Sarawak is Malaysia's main pepper-producing state and one of the world's top pepper exporters. Malaysian pepper is prized for its consistent quality and distinctive aroma.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-white/80 border border-green-100 rounded-2xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <h2 className="font-bold text-gray-800 text-sm">{item.title}</h2>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Pricing table */}
      <div className="bg-white/90 border border-green-100 rounded-2xl shadow-sm overflow-hidden animate-in delay-3">
        <div className="px-5 py-4 border-b border-green-50 bg-green-50/50">
          <h2 className="font-bold text-gray-800">Price per Quantity</h2>
          <p className="text-xs text-gray-400 mt-0.5">At today&apos;s MPB reference rate</p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-green-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-2.5">Grade</th>
              <th className="text-right px-5 py-2.5">100g</th>
              <th className="text-right px-5 py-2.5">500g</th>
              <th className="text-right px-5 py-2.5">1 kg</th>
              <th className="text-right px-5 py-2.5">10 kg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-50">
            {data.prices.map((p) => (
              <tr key={p.code} className="hover:bg-green-50/40 transition-colors">
                <td className="px-5 py-3 font-bold text-green-700">{p.code}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 0.1).toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 0.5).toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {p.price_per_kg.toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 10).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ad */}
      <AdBanner slot="2222222222" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

      {/* Meta / source */}
      <div className="text-center text-xs text-gray-400 space-y-1 animate-in delay-4">
        <p>
          Source:{" "}
          <a
            href="https://www.mpb.gov.my"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-600"
          >
            Malaysia Pepper Board (mpb.gov.my)
          </a>
        </p>
        <p className="text-gray-300">Prices are for informational reference only</p>
      </div>

      {/* Bottom links */}
      <div className="flex flex-wrap justify-center gap-3 text-sm pb-4">
        <Link href="/about" className="text-green-600 hover:underline">About</Link>
        <span className="text-gray-300">·</span>
        <Link href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>
        <span className="text-gray-300">·</span>
        <Link href="/terms" className="text-green-600 hover:underline">Terms</Link>
      </div>
    </div>
  );
}
