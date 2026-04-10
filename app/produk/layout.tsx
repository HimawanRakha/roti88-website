import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Kami",
  description: "Lihat daftar lengkap roti manis, cake, roti isi, dan roti sosis dari ROTI 88. Pesan camilan segar setiap hari di sini.",
  alternates: {
    canonical: "/produk",
  },
  openGraph: {
    title: "Produk Kami | ROTI 88",
    description: "Lihat daftar lengkap roti manis, cake, roti isi, dan roti sosis dari ROTI 88. Pesan camilan segar setiap hari di sini.",
    url: "https://www.roti88lumajang.com/produk",
  },
};

export default function ProdukLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
