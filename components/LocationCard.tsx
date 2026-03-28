// src/components/LocationCard.tsx
import React from "react";

interface LocationCardProps {
  name: string;
  address: string;
  googleMapsUrl: string; 
}

export default function LocationCard({ name, address, googleMapsUrl }: LocationCardProps) {
  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all cursor-pointer h-full no-underline block hover:text-white hover:bg-[#FF7A00]"
    >
      {/* Ikon Panah (Kanan Atas) */}
      <div className="absolute top-3 right-3 text-black group-hover:text-white transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>

      {/* Lingkaran Ikon Pin Map */}
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full shadow-inner bg-white mt-1 self-start">
        <svg className="w-5 h-5 text-[#4A2B12]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      {/* Teks Lokasi */}
      <div className="flex flex-col pr-6 text-left">
        <h4 className="text-[18px] font-bold text-black group-hover:text-white transition-colors mb-1">{name}</h4>
        <p className="text-[12px] md:text-[15px] text-gray-600 group-hover:text-gray-100 transition-colors line-clamp-2">{address}</p>
      </div>
    </a>
  );
}
