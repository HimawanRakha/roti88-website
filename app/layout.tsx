import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  // Gunakan template agar halaman lain (seperti /produk) otomatis pakai format ini
  title: {
    default: "ROTI 88 |  Selalu Jadi Pilihan! ",
    template: "%s | ROTI 88",
  },
  description: "ROTI 88 menyediakan berbagai macam roti manis, roti tawar, cake, dan roti sosis lezat yang dipanggang segar setiap hari dengan bahan premium.",
  keywords: ["toko roti", "roti manis", "roti tawar", "bakery surabaya", "roti sosis", "roti88"],
  authors: [{ name: "ROTI 88" }],
  creator: "ROTI 88",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "ROTI 88 |  Selalu Jadi Pilihan! ",
    description: "Pilihan tepat untuk camilan keluarga. Temukan berbagai varian roti favoritmu di ROTI 88.",
    url: "https://roti88-website.vercel.app",
    siteName: "ROTI 88",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ROTI 88 Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased pt-12">
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
