// components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/data/Product";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div onClick={() => onSelect(product)} className="bg-white rounded-xl md:rounded-xl shadow-md p-3 md:p-5 flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-5">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
        <button suppressHydrationWarning onClick={() => onSelect(product)} className="absolute top-2 right-2 bg-white p-1.5 md:p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-150">
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex-grow">
        <div className="mb-1 md:mb-2">
          <span className="font-inter inline-block border border-gray-300 text-gray-600 text-[12px] md:text-base font-medium px-2 py-0.5 rounded">{product.category}</span>
        </div>

        <h3 className="font-inter text-sm md:text-xl font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>

        <div className="text-[10px] md:text-xs text-gray-600 space-y-0.5 mb-3 md:mb-4">
          <p className="text-xs md:text-base line-clamp-2">{product.longDescription}</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-2 md:pt-4 mt-auto">
        <p className="text-base md:text-xl font-bold text-[#FF7A00]">
          Rp {product.price.toLocaleString("id-ID")} <span className="text-[10px] md:text-sm font-normal text-gray-500">/ {product.size}</span>
        </p>
      </div>
    </div>
  );
}
