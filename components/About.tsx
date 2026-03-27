"use client";

import React, { useState, useEffect, useRef } from "react";
import { features } from "@/data/DataFeatures";
import { FeatureCard } from "@/components/FeatureCard";

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
    <div className="w-full font-sans">
      <section className="py-16 px-4 md:px-8  mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black tracking-tight">Tentang kami</h2>
        <p className="text-gray-700 mx-4 md:mx-32 mb-12 leading-relaxed text-sm md:text-2xl mt-12">
          Berawal dari usaha sederhana dengan semangat menghadirkan roti fresh setiap hari, Roti 88 Lumajang tumbuh bersama kepercayaan pelanggan. Dengan berbagai varian roti yang terus berkembang, Roti 88 kini hadir di beberapa cabang dan
          menjadi pilihan banyak keluarga di Lumajang
        </p>

        {/* Garis pemisah horizontal antar paragraf dan grid */}
        <hr className="border-t-2 border-gray-300 mb-12 mx-8 md:mx-52" />

        {/* Menggunakan divide untuk memberikan garis pemisah antar kolom di mode desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center divide-y md:divide-y-0 md:divide-x-2 divide-gray-300">
          <div className="flex flex-col items-center py-8 md:py-0 px-4">
            <span className="text-gray-500 mb-3 md:text-lg font-medium text-sm tracking-widest uppercase">Berdiri sejak</span>
            <span className="text-7xl md:text-xl lg:text-6xl font-semibold text-black font-sans drop-shadow-sm">
              <Counter end={2012} duration={2500} start={1950} />
            </span>
          </div>

          <div className="flex flex-col items-center py-8 md:py-0 px-4">
            <span className="text-gray-500 mb-3 md:text-lg font-medium text-sm tracking-widest uppercase">Telah hadir</span>
            <span className="text-7xl md:text-5xl lg:text-6xl font-semibold text-black font-serif tracking-tight drop-shadow-sm">
              <Counter end={8} duration={2000} />
            </span>
            <span className="text-gray-500 mt-3 md:text-lg font-medium">Cabang di Lumajang</span>
          </div>

          <div className="flex flex-col items-center py-8 md:py-0 px-4">
            <span className="text-gray-500 mb-3 md:text-lg font-medium text-sm tracking-widest uppercase">Menjangkau</span>
            <span className="text-7xl md:text-5xl lg:text-6xl font-semibold text-black font-serif tracking-tight drop-shadow-sm">
              <Counter end={3} suffix="Jt+" duration={2000} />
            </span>
            <span className="text-gray-500 mt-3 md:text-lg font-medium">Pelanggan</span>
          </div>
        </div>
      </section>

      <section className="w-full">
        {/* Banner Orange */}
        <div className="bg-[#FF7A00] py-10 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Layanan kami</h2>
          <p className="text-white text-base md:text-2xl opacity-90">Kami akan selalu memberikan kualitas dan pelayanan terbaik</p>
        </div>

        {/* Container Cards */}
        {/* TODO: Ganti URL di bawah dengan path gambar pattern background roti milikmu */}
        <div className="relative py-16 px-4 md:px-8 bg-[url('/images/ng-roti.png')] bg-repeat bg-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 mb-10 mt-10">
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
