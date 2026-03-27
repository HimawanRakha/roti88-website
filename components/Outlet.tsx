import { MapPin, ArrowUpRight } from "lucide-react";

const outlets = [
  { name: "Klojen", address: "JL. Kapten Kyai Ilyas No.179" },
  { name: "Klojen 2", address: "JL. Kapten Kyai Ilyas No.181" },
  { name: "Klojen 3", address: "JL. Kapten Kyai Ilyas No.185" },
  { name: "Gandeng", address: "JL. Soekarno Hatta No.45" },
  { name: "Dwiwarna", address: "JL. Raya Siliwangi No.88" },
  { name: "Cahaya", address: "JL. Melati Indah No.12" },
  { name: "Citra", address: "JL. Anggrek No.63" },
  { name: "Harapan", address: "JL. Pahlawan No.30" },
];

export default function Outlet() {
  return (
    <section id="outlet" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <h2
          className="font-display text-dark text-center mb-12"
          style={{ fontSize: "clamp(28px, 3.5vw, 50px)" }}
        >
          Temukan Kami
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Map placeholder */}
          <div className="w-full lg:w-5/12">
            <div className="bg-[#F5E6D3] rounded-3xl overflow-hidden h-80 md:h-[400px] flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative text-center">
                <MapPin size={48} className="text-primary mx-auto mb-3" />
                <p className="font-lora font-semibold text-dark text-lg">Peta Outlet</p>
                <p className="font-inter text-dark/50 text-sm mt-1">Lumajang, Jawa Timur</p>
              </div>
            </div>
          </div>

          {/* Outlet grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outlets.map((outlet) => (
                <div
                  key={outlet.name}
                  className="flex items-center gap-3 bg-[#FFF5EC] rounded-xl px-4 py-4 hover:bg-primary/10 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                    <MapPin size={18} className="text-primary group-hover:text-white transition-all" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-lora font-semibold text-dark text-sm">{outlet.name}</p>
                    <p className="font-inter text-dark/50 text-xs truncate">{outlet.address}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
