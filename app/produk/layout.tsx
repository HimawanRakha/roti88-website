import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Kami",
  description: "Lihat daftar lengkap roti manis, cake, roti isi, dan roti sosis dari ROTI 88. Pesan camilan segar setiap hari di sini.",
};

export default function ProdukLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
