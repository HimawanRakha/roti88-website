"use client";

import React from "react";
import dynamic from "next/dynamic";

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
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
      {/* Kolom Kiri: Peta Leaflet */}
      {/* Diberi min-h-[500px] agar tingginya seimbang dengan daftar lokasi di kanan */}
      <div className="w-full lg:w-[45%] h-[400px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative z-0 bg-gray-100">
        <MapComponent />
      </div>

      {/* Kolom Kanan: Daftar Lokasi Outlet */}
      <div className="w-full lg:w-[55%] flex flex-col">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-8 text-left tracking-tight">Temukan Kami</h2>

        {/* Grid 2 Kolom untuk Card Lokasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <LocationCard key={loc.id} name={loc.name} address={loc.address} googleMapsUrl={loc.googleMapsUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
