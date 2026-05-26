import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://pepper.merquri.com"),
  title: {
    default: "Pepper Price Malaysia — Daily MPB Rates",
    template: "%s — Pepper Price Malaysia",
  },
  description:
    "Daily pepper prices in Malaysia from the Malaysia Pepper Board (MPB). Track Black Pepper Sarawak (BPS) and White Pepper Sarawak (WPS) rates in RM/tonne and RM/kg.",
  keywords: ["pepper price Malaysia", "harga lada Malaysia", "MPB price", "black pepper price", "white pepper price", "Sarawak pepper"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Pepper Price Malaysia",
    images: [{ url: "/pepper-hero.jpg", width: 800, height: 600, alt: "Pepper Price Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/pepper-hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          {/* Navbar */}
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🌿</span>
                <div>
                  <div className="leading-none">Pepper Price MY</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia Pepper Price</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Prices</Link>
                  <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>
              Harga lada dari / Pepper prices from{" "}
              <a href="https://www.mpb.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">
                Malaysia Pepper Board (MPB)
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">Tentang / About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Dasar Privasi / Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terma / Terms</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Pepper Price Malaysia · Untuk rujukan sahaja / For reference only</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
