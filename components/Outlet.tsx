"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { locations } from "../data/Location";
import LocationCard from "./LocationCard";

const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-50 animate-pulse flex flex-col items-center justify-center text-gray-500 font-medium rounded-2xl">
      <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Memuat Peta...
    </div>
  ),
});

// 2. KOMPONEN UTAMA SECTION
export default function FindUsSection() {
  return (
    <section id="outlet" className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-2xl md:text-5xl font-extrabold text-black mb-6 md:mb-8 text-left tracking-tight"
      >
        Temukan Kami
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        {/* Kolom Kiri: Peta Leaflet */}
        {/* Disembunyikan pada mobile (<768px) karena sering merusak layout tap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:block w-full lg:w-[45%] h-[400px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative z-0 bg-gray-100"
        >
          <MapComponent />
        </motion.div>

        {/* Kolom Kanan: Daftar Lokasi Outlet */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Grid 2 Kolom untuk Card Lokasi */}
        <div className="max-h-[350px] lg:max-h-none overflow-y-auto lg:overflow-visible pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <LocationCard name={loc.name} address={loc.address} googleMapsUrl={loc.googleMapsUrl} />
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
