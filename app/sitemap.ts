// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roti88-website.vercel.app"; // Ganti dengan domain aslimu nanti

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1, // Prioritas tertinggi untuk halaman utama
    },
    {
      url: `${baseUrl}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly", // Halaman produk sering di-update
      priority: 0.8,
    },
  ];
}
