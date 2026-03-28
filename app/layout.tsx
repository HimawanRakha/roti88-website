import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Gunakan template agar halaman lain (seperti /produk) otomatis pakai format ini
  title: {
    default: "Roti88 |  Selalu Jadi Pilihan! ",
    template: "%s | Roti88",
  },
  description: "Roti88 menyediakan berbagai macam roti manis, roti tawar, cake, dan roti sosis lezat yang dipanggang segar setiap hari dengan bahan premium.",
  keywords: ["toko roti", "roti manis", "roti tawar", "bakery surabaya", "roti sosis", "roti88"],
  authors: [{ name: "Roti88" }],
  creator: "Roti88",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Roti88 |  Selalu Jadi Pilihan! ",
    description: "Pilihan tepat untuk camilan keluarga. Temukan berbagai varian roti favoritmu di Roti88.",
    url: "https://roti88-website.vercel.app",
    siteName: "Roti88",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Roti88 Logo",
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
      </body>
    </html>
  );
}
