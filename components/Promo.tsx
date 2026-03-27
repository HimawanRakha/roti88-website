"use client";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Promo() {
  return (
    <>
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {/* Kolom Kiri: Promo Hari Ini */}
          <div className=" justify-center flex flex-col items-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 text-black text-center md:text-center">Promo hari ini</h2>
            <div className="relative inline-block w-full max-w-sm mx-auto md:mx-0">
              {/* Bingkai dekoratif berlapis di belakang */}
              <div className="absolute inset-0 rounded-xl border border-black rotate-1 transform translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 rounded-xl border border-black -rotate-1 transform -translate-x-2 translate-y-1"></div>

              {/* Container Utama untuk Gambar Selebaran Promo */}
              <div className="relative rounded-xl border-2 border-gray-800 p-2 bg-white shadow-sm w-full text-center justify-center flex items-center">
                <img src="/images/promo.png" alt="Selebaran Promo" className="w-full rounded-lg object-cover" />
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Katalog Produk */}
          <div className="max-w-2xl ">
            <div className="mb-8 text-center md:text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-1 text-black inline-block relative">
                Katalog Produk
                {/* Garis bawah oranye */}
                <div className="mx-auto w-1/2 h-[3px] bg-[#FF7A00] mt-8"></div>
              </h2>
            </div>

            {/* Container Kartu Katalog */}
            <div className="flex flex-col sm:flex-row bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100 rounded-xl overflow-hidden">
              {/* Kolom Teks Katalog */}
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">Seluruh Pilihan Rasa Kini Ada di Genggaman Anda</h3>
                <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8">Unduh katalog lengkap kami untuk melihat daftar harga terbaru, varian produk harian, dan pilihan paket snack box untuk kebutuhan acara Anda.</p>

                {/* Tombol PDF Katalog */}
                <div>
                  <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FF7A00] rounded-lg text-white text-base md:text-lg font-semibold hover:bg-[#E06A00] transition-colors shadow-md w-full sm:w-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Lihat Katalog Lengkap (PDF)
                  </button>
                </div>
              </div>

              {/* Kolom Gambar/Ilustrasi Katalog */}
              {/* Menggunakan sm:h-auto agar tinggi otomatis mengikuti kolom teks dan memanjang penuh */}
              <div className="w-full sm:w-1/3 md:w-2/5 h-64 sm:h-auto">
                <img src="/images/bg-kata.png" alt="Ilustrasi Katalog" className="w-full h-full object-cover object-center rounded-l-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
