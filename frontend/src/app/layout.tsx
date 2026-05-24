import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";

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
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-green-100 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-green-800 text-lg">
              <span className="text-2xl">🌿</span>
              <span>Pepper Price MY</span>
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium text-green-700">
              <Link href="/" className="hover:text-green-900 transition-colors">Prices</Link>
              <Link href="/about" className="hover:text-green-900 transition-colors">About</Link>
              <Link href="/privacy-policy" className="hover:text-green-900 transition-colors">Privacy</Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-green-100 bg-white/60 mt-10 py-6 text-center text-xs text-gray-400 space-y-1">
          <p>Pepper prices sourced from <a href="https://www.mpb.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Malaysia Pepper Board (MPB)</a></p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link href="/about" className="hover:text-green-600">About</Link>
            <span>·</span>
            <Link href="/privacy-policy" className="hover:text-green-600">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-green-600">Terms of Service</Link>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} Pepper Price Malaysia · Informational use only</p>
        </footer>
      </body>
    </html>
  );
}
