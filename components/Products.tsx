"use client";
import { motion } from "framer-motion";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

// Mendefinisikan tipe data untuk object di dalam array products
interface Product {
  name: string;
  image: string;
  priceLabel?: string;
}

const FoodSiteSections: React.FC = () => {
  // Data produk menggunakan interface yang sudah dibuat
  const products: Product[] = [
    { name: "ROTI MANIS", image: "/images/roti-bb.JPG", priceLabel: "/images/pin1.png" },
    { name: "CAKE", image: "/images/cake.jpeg" },
    // { name: "ROTI ISI", image: "/images/roti-i.jpeg" },
    // { name: "ROTI JUMBO", image: "/images/roti-j.JPG" },
    // { name: "ROTI SOSIS", image: "/images/roti-s.JPG" },
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-white mt-10">
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-2 text-black">Produk kami</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-[13px] md:text-2xl">Pilihan produk terbaik dari kami</p>
        </motion.div>

        {/* Grid Produk - Reusable Card */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              // Mobile: 1 kolom (w-full)
              // Tablet & Desktop: 2 kolom (50% dikurangi porsi gap-6 atau 24px)
              className="w-full md:w-[calc(50%-12px)]"
            >
              <ProductCard productName={product.name} imageSrc={product.image} priceLabelImage={product.priceLabel} />
            </motion.div>
          ))}
        </div>

        {/* Tombol Lihat Semua (Outlined) */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex justify-center">
          <Link href="/produk">
            <button className="px-5 py-2 md:px-6 md:py-2 border border-gray-400 rounded-md text-sm md:text-xl font-medium text-gray-700 hover:bg-gray-200 ">Lihat semua</button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default FoodSiteSections;
