import React from "react";
import ProductCard from "./ProductCard";

// Mendefinisikan tipe data untuk object di dalam array products
interface Product {
  name: string;
  image: string;
  priceLabel?: string;
}

const FoodSiteSections: React.FC = () => {
  // Data produk menggunakan interface yang sudah dibuat
  const products: Product[] = [
    { name: "ROTI MANIS", image: "/images/roti-c.JPG" },
    { name: "CAKE", image: "/images/cake.jpeg" },
    { name: "ROTI ISI", image: "/images/roti-i.jpeg" },
    { name: "ROTI SOSIS", image: "/images/roti-s.jpg", priceLabel: "/images/pin.png" },
  ];

  return (
    <div className="font-sans antialiased text-gray-900 bg-white mt-10">
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black">Produk kami</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-2xl">Pilihan produk terbaik dari kami</p>
        </div>

        {/* Grid Produk - Reusable Card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} productName={product.name} imageSrc={product.image} priceLabelImage={product.priceLabel} />
          ))}
        </div>

        {/* Tombol Lihat Semua (Outlined) */}
        <div className="flex justify-center">
          <button className="px-6 py-2 border border-gray-400 rounded-md text-xl font-medium text-gray-700 hover:border-gray-500 transition-colors">Lihat semua</button>
        </div>
      </section>
    </div>
  );
};

export default FoodSiteSections;
