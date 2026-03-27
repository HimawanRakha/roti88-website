export default function CTA() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg-cta.png')] bg-cover bg-center"></div>

      {/* Overlay Gelap */}

      <div className="relative text-center px-4 max-w-6xl z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black/80">Tertarik untuk memesan?</h2>
        <p className="text-gray-100 text-lg md:text-2xl leading-relaxed mb-8 max-w-6xl mx-auto shadow-black/80">
          Roti 88 hadir untuk berbagai kebutuhan, mulai dari sarapan sehari-hari, camilan keluarga, hingga pesanan untuk acara seperti hajatan, kenduri, acara kantor, kegiatan komunitas. berbagai momen kebersamaan lainnya
        </p>

        {/* Tombol WhatsApp (Oranye Solid) */}
        <button className="inline-flex items-center gap-5 px-6 py-3 bg-[#FF7A00] rounded-md text-white text-xl font-semibold hover:bg-[#E06A00] transition-colors shadow-md">
          <img src="/images/logos_whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
          Konsultasi via WhatsApp
        </button>
      </div>
    </section>
  );
}
