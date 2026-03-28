import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ROTI 88 - Fresh From Oven Everyday",
  description: "Roti 88 Lumajang - Banyak pilihan roti segar, selalu siap jadi pilihanmu hari ini. Gratis antar, fresh from oven, halal.",
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
      </body>
    </html>
  );
}
