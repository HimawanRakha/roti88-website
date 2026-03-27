import React from "react";

// Mendefinisikan tipe data untuk props yang diterima komponen
interface ProductCardProps {
  imageSrc: string;
  productName: string;
  priceLabelImage?: string; // Tanda tanya (?) berarti opsional
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName, priceLabelImage }) => {
  return (
    <div className="relative aspect-square rounded-lg shadow-md group cursor-pointer">
      <img src={imageSrc} alt={productName} className="w-full h-full object-cover rounded-lg" />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300 rounded-lg"></div>

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h3 className="text-xl md:text-2xl font-bold text-white text-center tracking-tight [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black/70">{productName}</h3>
      </div>

      {priceLabelImage && (
        <div className="absolute top-[-100px] left-[-40px] z-10">
          <img src={priceLabelImage} alt="Price Label" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
