import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roti88lumajang.com"),
  // Gunakan template agar halaman lain (seperti /produk) otomatis pakai format ini
  title: {
    default: "ROTI 88 | Selalu Jadi Pilihan!",
    template: "%s | ROTI 88",
  },
  description: "ROTI 88 menyediakan berbagai macam roti manis, roti tawar, cake, dan roti sosis lezat yang dipanggang segar setiap hari dengan bahan premium.",
  keywords: ["toko roti", "roti manis", "roti tawar", "bakery surabaya", "bakery lumajang", "roti sosis", "roti88", "roti 88 lumajang"],
  authors: [{ name: "ROTI 88", url: "https://www.roti88lumajang.com" }],
  creator: "ROTI 88",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "ROTI 88 | Selalu Jadi Pilihan!",
    description: "Pilihan tepat untuk camilan keluarga. Temukan berbagai varian roti favoritmu di ROTI 88.",
    url: "https://www.roti88lumajang.com/",
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
  twitter: {
    card: "summary_large_image",
    title: "ROTI 88 | Selalu Jadi Pilihan!",
    description: "ROTI 88 menyediakan berbagai macam roti manis, roti tawar, cake, dan roti sosis lezat yang dipanggang segar setiap hari dengan bahan premium.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="antialiased pt-12">
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
