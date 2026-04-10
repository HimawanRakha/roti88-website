"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    // Background coklat gelap, sesuaikan hex color-nya jika ada warna spesifik dari desainer Anda
    <motion.footer initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-10px" }} className="bg-[#5A2C22] text-white pt-16 pb-8 px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between gap-12 md:gap-8">
        {/* Kolom Kiri: Brand & Deskripsi */}
        <div className="md:col-span-2 lg:col-span-1 lg:w-1/2">
          <h2 className="text-2xl md:text-4xl  mb-4 font-serif tracking-tight">ROTI 88</h2>
          <p className="text-[13px] md:text-base mb-6 max-w-sm text-gray-200 font-lora">Fresh from oven everyday! Banyak pilihan, Selalu siap jadi pilihanmu hari ini.</p>

          {/* Sosial Media Icons */}
          <div className="flex items-center gap-4">
            {/* TODO: Masukkan link WhatsApp di atribut href */}
            <a href="https://wa.me/6282142634989" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
                <path d="M16 .396C7.163.396 0 7.559 0 16c0 2.82.738 5.47 2.03 7.77L0 32l8.39-2.19A15.9 15.9 0 0016 31.604c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.2c-2.46 0-4.85-.66-6.94-1.91l-.5-.3-4.98 1.3 1.33-4.86-.33-.5A13.6 13.6 0 012.4 16c0-7.5 6.1-13.6 13.6-13.6S29.6 8.5 29.6 16 23.5 29.596 16 29.596zm7.45-10.24c-.41-.2-2.42-1.2-2.8-1.34-.38-.14-.66-.2-.94.2-.28.41-1.08 1.34-1.32 1.62-.24.28-.49.31-.9.1-.41-.2-1.73-.64-3.3-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.83.19-.18.41-.49.62-.73.21-.24.28-.41.41-.69.14-.28.07-.52-.03-.73-.1-.2-.94-2.26-1.29-3.1-.34-.82-.69-.7-.94-.7h-.8c-.28 0-.73.1-1.11.52-.38.41-1.45 1.42-1.45 3.45s1.48 4 1.69 4.28c.21.28 2.91 4.44 7.05 6.22.99.43 1.76.68 2.36.87.99.31 1.89.27 2.6.16.79-.12 2.42-.99 2.76-1.94.34-.94.34-1.75.24-1.94-.1-.2-.38-.31-.79-.52z" />
              </svg>
            </a>
            {/* TODO: Masukkan link Instagram di atribut href */}
            <a href="https://www.instagram.com/roti88.lumajang/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg className="w-8 h-8 fill-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Quick Links & Produk */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 md:col-span-2 lg:col-span-1 lg:w-1/2 lg:justify-end lg:pr-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-1 font-serif text-[15px] md:text-[18px] text-gray-200">
              {/* TODO: Masukkan link untuk masing-masing halaman */}
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Outlet
                </a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-serif">Produk</h3>
            <ul className="space-y-1 font-serif text-[15px] md:text-[18px] text-gray-200">
              {/* TODO: Masukkan link untuk kategori produk */}
              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Roti Manis
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white hover:underline transition-colors">
                  Cake
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/30 text-[10px] md:text-[15px] text-gray-300 font-serif justify-center text-center">@2026 ROTI 88. All right reserved</div>
    </motion.footer>
  );
}
