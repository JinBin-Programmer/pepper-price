import type { PepperPrice } from "@/lib/pepper";

interface Props {
  price: PepperPrice;
  index: number;
}

const ICONS: Record<string, string> = {
  BPS: "⚫",
  WPS: "⚪",
};

const BG: Record<string, string> = {
  BPS: "from-gray-800 to-gray-600",
  WPS: "from-gray-100 to-white border border-gray-200",
};

const TEXT: Record<string, string> = {
  BPS: "text-white",
  WPS: "text-gray-800",
};

const SUB: Record<string, string> = {
  BPS: "text-gray-300",
  WPS: "text-gray-500",
};

export default function PriceCard({ price, index }: Props) {
  const icon = ICONS[price.code] ?? "🌿";
  const bg = BG[price.code] ?? "from-green-500 to-green-700";
  const text = TEXT[price.code] ?? "text-white";
  const sub = SUB[price.code] ?? "text-green-100";

  return (
    <div
      className={`animate-in bg-gradient-to-br ${bg} rounded-2xl shadow-lg p-6 flex flex-col gap-3`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <div className={`font-bold text-lg leading-tight ${text}`}>{price.type}</div>
          <div className={`text-xs ${sub}`}>Code: {price.code}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <div>
          <div className={`text-xs uppercase tracking-wide ${sub} mb-0.5`}>Per Tonne</div>
          <div className={`text-2xl font-extrabold ${text}`}>
            RM {price.price_per_tonne.toLocaleString("en-MY", { minimumFractionDigits: 0 })}
          </div>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${sub} mb-0.5`}>Per Kilogram</div>
          <div className={`text-2xl font-extrabold ${text}`}>
            RM {price.price_per_kg.toFixed(2)}
          </div>
        </div>
      </div>

      <div className={`text-xs ${sub} mt-1`}>
        {price.code === "BPS"
          ? "Black Pepper Sarawak · Oven dried, FAQ grade"
          : "White Pepper Sarawak · ASTA/FAQ grade"}
      </div>
    </div>
  );
}
