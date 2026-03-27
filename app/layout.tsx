import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROTI 88 - Fresh From Oven Everyday",
  description:
    "Roti 88 Lumajang - Banyak pilihan roti segar, selalu siap jadi pilihanmu hari ini. Gratis antar, fresh from oven, halal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
