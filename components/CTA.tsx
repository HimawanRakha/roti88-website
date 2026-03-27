"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg-cta.png')] bg-cover bg-center"></div>

      {/* Overlay Gelap */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative text-center px-4 max-w-6xl z-10 w-full"
      >
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black/80">Tertarik untuk memesan?</h2>
        <p className="text-gray-100 text-sm md:text-2xl leading-relaxed mb-8 max-w-6xl mx-auto shadow-black/80">
          Roti 88 hadir untuk berbagai kebutuhan, mulai dari sarapan sehari-hari, camilan keluarga, hingga pesanan untuk acara seperti hajatan, kenduri, acara kantor, kegiatan komunitas. berbagai momen kebersamaan lainnya
        </p>

        {/* Tombol WhatsApp (Oranye Solid) */}
        <button className="flex justify-center items-center gap-2 md:gap-5 w-full md:w-auto px-4 py-3 md:px-6 md:py-4 bg-[#FF7A00] rounded-lg text-white text-[14px] md:text-xl font-semibold hover:bg-[#E06A00] transition-colors shadow-md mx-auto">
          <img src="/images/logos_whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5 md:w-8 md:h-8" />
          Konsultasi via WhatsApp
        </button>
      </motion.div>
    </section>
  );
}
