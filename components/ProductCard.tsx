import React from "react";
import Image from "next/image";

// Mendefinisikan tipe data untuk props yang diterima komponen
interface ProductCardProps {
  imageSrc: string;
  productName: string;
  priceLabelImage?: string; // Tanda tanya (?) berarti opsional
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName, priceLabelImage }) => {
  return (
    <div className="relative w-full rounded-lg shadow-md group cursor-pointer aspect-video">
      <Image src={imageSrc} alt={productName} fill className="object-cover rounded-lg z-0" sizes="(max-width: 768px) 100vw, 50vw" />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300 rounded-lg z-10"></div>

      <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
        <h3 className="font-lora text-xl md:text-2xl font-bold text-white text-center drop-shadow-md">{productName}</h3>
      </div>

      {priceLabelImage && (
        <div className="absolute top-[-20px] left-[-15px] sm:top-[-40px] sm:left-[-20px] md:top-[-100px] md:left-[-30px] z-30 w-20 sm:w-24 md:w-32 drop-shadow-lg">
          <Image src={priceLabelImage} alt="Price Label" width={150} height={150} className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
