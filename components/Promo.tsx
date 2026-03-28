"use client";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Promo() {
  return (
    <>
      <section id="promo" className="py-12 md:py-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  items-start">
          {/* Kolom Kiri: Promo Hari Ini */}
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col items-center lg:items-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-black text-center">Promo hari ini</h2>
            <div className="relative inline-block w-full max-w-sm mx-auto md:mx-0">
              {/* Bingkai dekoratif berlapis di belakang */}
              <div className="absolute inset-0 rounded-xl border border-black rotate-1 transform translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 rounded-xl border border-black -rotate-1 transform -translate-x-2 translate-y-1"></div>

              {/* Container Utama untuk Gambar Selebaran Promo */}
              <div className="relative rounded-xl border-2 border-gray-800 p-2 bg-white shadow-sm w-full text-center justify-center flex items-center">
                <Image src="/images/promo.png" alt="Selebaran Promo" width={600} height={800} className="w-full h-auto rounded-lg object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Katalog Produk */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto w-full pt-8 lg:pt-0"
          >
            <div className="mb-6 md:mb-8 text-center pt-8 md:pt-0">
              <h2 className="text-2xl md:text-5xl font-bold mb-1 text-black inline-block relative">
                Katalog Produk
                {/* Garis bawah oranye */}
                <div className="mx-auto w-1/2 h-[3px] bg-[#FF7A00] mt-4 md:mt-8"></div>
              </h2>
            </div>

            {/* Container Kartu Katalog */}
            <div className="flex flex-row items-stretch bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100 rounded-xl overflow-hidden">
              {/* Kolom Teks Katalog */}
              <div className="flex-1 p-4 sm:p-6 md:p-10 flex flex-col justify-center text-left">
                <h3 className="text-[16px] sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 md:mb-6 text-black">Seluruh Pilihan Rasa Kini Ada di Genggaman Anda</h3>
                <p className="text-gray-600 text-[12px] sm:text-sm md:text-lg mb-4 sm:mb-6 md:mb-8">Unduh katalog lengkap kami untuk melihat daftar harga terbaru, varian produk harian, dan pilihan paket snack box.</p>

                {/* Tombol PDF Katalog */}
                <div>
                  <button className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-[#FF7A00] rounded-lg text-white text-[12px] sm:text-base md:text-lg font-semibold hover:bg-[#E06A00] transition-colors shadow-md w-full sm:w-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span className="truncate">Lihat Katalog (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Kolom Gambar/Ilustrasi Katalog */}
              {/* Menggunakan w-2/5 agar proporsional bersama teks sebelah kirinya dalam setting flex-row */}
              <div className="w-[35%] sm:w-[40%] md:w-[45%] lg:w-[40%] flex-shrink-0 relative">
                <Image src="/images/bg-kata.png" alt="Ilustrasi Katalog" fill className="object-cover object-center rounded-l-2xl sm:rounded-l-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
