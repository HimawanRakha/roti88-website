"use client";

import React, { useState, useEffect, useRef } from "react";
import { features } from "@/data/DataFeatures";
import { FeatureCard } from "@/components/FeatureCard";
import { motion } from "framer-motion";

function Counter({ end, suffix = "", duration = 2000, start = 0 }: { end: number; suffix?: string; duration?: number; start?: number }) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimer: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimer) startTimer = timestamp;
            const progress = Math.min((timestamp - startTimer) / duration, 1);
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutAndServices() {
  return (
    <div id="tentang" className="w-full font-sans overflow-hidden">
      <section className="py-16 px-4 md:px-8  mx-auto text-center mb-20">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-black">
          Tentang kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-gray-700 mx-4 md:mx-32 mb-10 md:mb-12 text-[13px] md:text-2xl mt-6 md:mt-12"
        >
          Berawal dari usaha sederhana dengan semangat menghadirkan roti fresh setiap hari, ROTI 88 Lumajang tumbuh bersama kepercayaan pelanggan. Dengan berbagai varian roti yang terus berkembang, ROTI 88 kini hadir di beberapa cabang dan
          menjadi pilihan banyak keluarga di Lumajang
        </motion.p>

        {/* Garis pemisah horizontal antar paragraf dan grid */}
        <motion.hr initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="border-t-2 border-gray-300 mb-12 mx-8 md:mx-52 origin-center" />

        {/* Menggunakan divide untuk memberikan garis pemisah antar kolom di mode desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 items-center justify-center gap-0 md:gap-0 divide-x-2 divide-gray-300"
        >
          <div className="flex flex-col items-center py-4 md:py-0 px-1 sm:px-4 text-center">
            <span className="text-gray-500 mb-1 md:mb-2 md:text-lg font-medium text-[9px] sm:text-[13px] uppercase">Berdiri sejak</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-black font-lora drop-shadow-sm">
              <Counter end={2012} duration={2500} start={1950} />
            </span>
          </div>

          <div className="flex flex-col items-center py-4 md:py-0 px-1 sm:px-4 text-center">
            <span className="text-gray-500 mb-1 md:mb-2 md:text-lg font-medium text-[9px] sm:text-[13px] uppercase">Telah hadir</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-black font-serif drop-shadow-sm">
              <Counter end={8} duration={2000} />
            </span>
            <span className="text-gray-500 mt-1 md:text-lg font-medium text-[9px] sm:text-[13px]">
              Cabang
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> di Lumajang</span>
            </span>
          </div>

          <div className="flex flex-col items-center py-4 md:py-0 px-1 sm:px-4 text-center">
            <span className="text-gray-500 mb-1 md:mb-2 md:text-lg font-medium text-[9px] sm:text-[13px] uppercase">Menjangkau</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-black font-serif drop-shadow-sm">
              <Counter end={3} suffix="Jt+" duration={2000} />
            </span>
            <span className="text-gray-500 mt-1 md:text-lg font-medium text-[9px] sm:text-[13px]">Pelanggan</span>
          </div>
        </motion.div>
      </section>

      <section className="w-full">
        {/* Banner Orange */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-[#FF7A00] py-10 px-4 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-2">Layanan kami</h2>
          <p className="text-white text-sm md:text-2xl opacity-90">Kami akan selalu memberikan kualitas dan pelayanan terbaik</p>
        </motion.div>

        {/* Container Cards - Dirubah jadi grid 1 kolumn murni di hp, 2 di tablet */}
        {/* TODO: Ganti URL di bawah dengan path gambar pattern background roti milikmu */}
        <div className="relative py-16 px-4 md:px-8 bg-[url('/images/ng-roti1.png')] bg-contain bg-center bg-repeat">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 relative z-10 mb-10 mt-10">
            {features.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}>
                <FeatureCard title={item.title} desc={item.desc} icon={item.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
