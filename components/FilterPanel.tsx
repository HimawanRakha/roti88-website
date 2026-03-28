// components/FilterPanel.tsx
"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = ["Roti Manis", "Cake", "Roti Isi", "Roti Jumbo", "Roti Sosis"];

export default function FilterPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-8">
      {/* Pencarian */}
      <div className="relative">
        <input
          type="text"
          placeholder="Cari Roti..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>

      {/* Filter Kategori */}
      <div>
        <h4 className="text-xl font-semibold text-blue-900 mb-6">Jenis</h4>
        <div className="space-y-4">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-4 cursor-pointer text-gray-700 hover:text-orange-600 transition">
              <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleCategoryChange(category)} className="w-6 h-6 rounded border-gray-300 text-orange-600 focus:ring-orange-500 cursor-pointer" />
              <span className="text-lg">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
