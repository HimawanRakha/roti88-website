// app/produk/page.tsx
"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { products, Product } from "@/data/Product";
import ProductCard1 from "@/components/ProductCard1";
import ProductModal from "@/components/ProductModal";
import { ListFilter, Search, X, ArrowLeft, ArrowRight } from "lucide-react";

const CATEGORIES = ["Roti Manis", "Cake"];
const ITEMS_PER_PAGE = 10;

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // State untuk Filter & Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams?.get("category");
    if (categoryParam) {
      const categories = categoryParam
        .split(",")
        .map((value) => value.trim())
        .filter((value) => CATEGORIES.includes(value));
      setSelectedCategories(categories);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Logic Kategori
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category];
      setCurrentPage(1); // Reset ke halaman 1 tiap kali filter berubah
      return newCategories;
    });
  };

  // Logic Filter Keseluruhan
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategories]);

  // Logic Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // UI Filter (Digunakan di Desktop & Mobile)
  const FilterContent = () => (
    <div className="space-y-6">
      <div className="relative">
        <input
          suppressHydrationWarning
          type="text"
          placeholder="Cari Roti..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      <div>
        <h4 className="text-base font-bold text-gray-900 mb-4">Jenis</h4>
        <div className="space-y-3">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer text-gray-700">
              <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleCategoryChange(category)} className="w-5 h-5 rounded border-gray-400 text-orange-600 focus:ring-orange-500" />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="relative h-48 md:h-60 w-full overflow-hidden">
        <Image src={"/images/roti-bb.png"} alt="Latar belakang produk" fill className="object-cover brightness-50" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-2 text-white">Produk Kami</h1>
          <p className="text-gray-100 max-w-2xl mx-auto text-[13px] md:text-2xl">Pilihan produk terbaik dari kami</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        {/* Top Bar (Jumlah Item & Tombol Filter Mobile) */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <span className="text-sm md:text-base text-gray-600">
            <strong className="text-gray-900">{filteredProducts.length}</strong> Roti ditemukan
          </span>
          <button suppressHydrationWarning onClick={() => setIsMobileFilterOpen(true)} className="md:hidden flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 bg-white">
            Filter <ListFilter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Desktop */}
          <aside className="hidden md:block w-1/4 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">{FilterContent()}</div>
          </aside>

          {/* Grid Produk */}
          <section className="w-full md:w-3/4">
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard1 key={product.sku} product={product} onSelect={setSelectedProduct} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500">Tidak ada roti yang sesuai dengan filter.</div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center gap-4 mt-10 pt-6 border-t border-gray-200">
                <button suppressHydrationWarning onClick={handlePrevPage} disabled={currentPage === 1} className="p-2 border border-gray-300 rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition">
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
                <span className="text-sm text-gray-600 font-medium">
                  Hal {currentPage} / {totalPages}
                </span>
                <button suppressHydrationWarning onClick={handleNextPage} disabled={currentPage === totalPages} className="p-2 border border-gray-300 rounded-lg bg-[#5A2C22] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4a241b] transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Modal Filter Mobile */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto transform transition-transform">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-900">Filter Roti</h3>
              <button suppressHydrationWarning onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            {FilterContent()}
            <button suppressHydrationWarning onClick={() => setIsMobileFilterOpen(false)} className="w-full mt-8 bg-orange-600 text-white py-3 rounded-lg font-semibold text-xs">
              Terapkan Filter
            </button>
          </div>
        </div>
      )}

      {/* Modal Produk (Dari komponen sebelumnya) */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
