import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F87900] overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* 1. Dekorasi Lelehan Coklat (Top Chocolate Drip) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Di mobile pakai object-cover agar memanjang ke bawah sesuai desain, di desktop kembali ke object-contain milikmu */}
        <Image src="/images/Group.png" alt="Chocolate Drip" fill className="object-cover md:object-contain object-top w-full" priority />
      </div>

      {/* Konten Utama */}
      {/* mt ditambahkan sedikit di mobile agar tidak tertutup lelehan coklat yang memanjang */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-6xl mt-48 md:mt-16">
        {/* 2. Judul Besar: ROTI & Gambar 88 */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-32 mb-6">
          <h1
            // Di desktop text-stroke 6px, di mobile 2px agar tidak ketebalan. Tracking juga disesuaikan.
            className="font-serif font-bold text-[#FFFF00] drop-shadow-md tracking-[-2px] md:tracking-[-10px] [-webkit-text-stroke:2.5px_#1A1A1A] md:[-webkit-text-stroke:6px_#1A1A1A]"
            style={{
              fontSize: "clamp(60px, 15vw, 320px)", // Base clamp desktopmu dipertahankan, batas bawah di 60px untuk HP
              lineHeight: "1",
            }}
          >
            ROTI
          </h1>

          {/* Placeholder Gambar 88 (Rotasi ke kanan) */}
          {/* Ukuran menyusut di mobile, kembali ke ukuran aslimu di md (desktop) */}
          <div className="relative w-[110px] h-[80px] md:w-[450px] md:h-[400px]">
            <Image src="/images/88-image.png" alt="Logo 88" fill className="object-contain" priority />
          </div>
        </div>

        {/* 3. Tagline dengan Sisipan Gambar "everyday" */}
        {/* Ukuran teks mengecil di mobile agar bisa sejajar memeluk gambar "everyday" */}
        <div className="flex flex-col items-center justify-center text-white text-[13px] md:text-3xl font-normal tracking-tight mt-1 mb-8 md:mb-10 w-full px-2">
          <div className="flex items-center flex-wrap justify-center gap-1.5 md:gap-4">
            <span>Fresh from oven</span>

            {/* Placeholder Gambar Everyday */}
            <div className="relative w-[85px] h-[30px] md:w-[40vw] md:max-w-[150px] md:h-[20vw] md:max-h-[90px] -rotate-12 md:-rotate-10 flex-shrink-0 mx-0.5">
              <Image src="/images/everyday-image.png" alt="Everyday" fill className="object-contain" />
            </div>

            <span>Banyak pilihan,</span>
          </div>
          <span className="mt-1 md:mt-0">selalu siap jadi pilihanmu hari ini</span>
        </div>

        {/* 4. Tombol Aksi (Call to Action) */}
        {/* Dibuat paten flex-row, lebar masing-masing 50% di mobile (w-1/2) agar pas sejajar */}
        <div className="flex flex-row gap-3 md:gap-5 justify-center items-center w-full md:w-auto px-2 md:px-0">
          {/* Tombol Lihat Produk */}
          <a
            href="#produk"
            className="flex items-center justify-center gap-1.5 md:gap-4 bg-[#5B2E1E] text-white font-serif text-[11px] md:text-xl px-2 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-[#432014] transition-all duration-300 shadow-xl w-1/2 md:w-auto"
          >
            <span className="whitespace-nowrap">Lihat Produk</span>
            <span className="bg-white rounded-full p-1 md:p-1.5 flex items-center justify-center">
              {/* Icon mengecil di mobile */}
              <ArrowRight className="text-[#5B2E1E] stroke-[3] w-3 h-3 md:w-[20px] md:h-[20px]" />
            </span>
          </a>

          {/* Tombol Beli Sekarang */}
          <a
            href="tel:082228333485"
            className="flex items-center justify-center gap-1.5 md:gap-4 bg-white text-black font-serif font-bold text-[11px] md:text-xl px-2 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl w-1/2 md:w-auto"
          >
            <Phone className="text-black w-3 h-3 md:w-[24px] md:h-[24px]" />
            <span className="whitespace-nowrap">Beli Sekarang</span>
          </a>
        </div>

        {/* 5. Jam Operasional */}
        <div className="mt-8 md:mt-8 text-white text-[11px] md:text-base font-bold text-center">
          <p>Jam Operasional (Setiap hari)</p>
          <p className="mt-0.5 md:mt-1">06.00 - 20.30</p>
        </div>
      </div>
    </section>
  );
}
