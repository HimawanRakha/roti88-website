// components/ProductModal.tsx
import Image from "next/image";
import { Product } from "@/data/Product";
import { X } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-8 md:p-12 flex flex-col md:flex-row gap-10 " onClick={(e) => e.stopPropagation()}>
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition">
          <X className="w-6 h-6" />
        </button>

        {/* Gambar Besar */}
        <div className=" w-3/4 md:w-1/2 flex-shrink-0 ">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>

        {/* Detail Produk */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-3">
              <span className="font-inter inline-block border border-gray-300 text-gray-600 text-[12px] md:text-base font-medium px-2 py-0.5 rounded">{product.category}</span>
            </div>

            <h2 className="text-4xl font-bold text-[#5D2B21] mb-6">{product.name}</h2>

            <p className="text-lg text-gray-700 mb-8 italic">"{product.shortDescription}"</p>

            <div className="space-y-4 mb-10 text-gray-700">
              <p>
                <strong>Ukuran:</strong> {product.size}
              </p>
              <div className="prose text-gray-600">
                <p>
                  <strong>Deskripsi:</strong>
                </p>
                <p>{product.longDescription}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-auto flex justify-between items-center">
            <p className="text-2xl md:text-4xl font-extrabold text-orange-600">Rp {product.price.toLocaleString("id-ID")}</p>
            <p className="text-base text-gray-500">Harga Per {product.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
