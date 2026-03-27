// src/data/locations.ts

export interface LocationData {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  googleMapsUrl: string; // ✨ Bidang baru untuk link Google Maps
}

export const locations: LocationData[] = [
  {
    id: "1",
    name: "Klojen (Lumajang Kota)",
    address: "JL. Kapten Kyai Ilyas No.179. Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
    lat: -8.1333,
    lng: 113.2222,
    googleMapsUrl: "https://maps.app.goo.gl/YBjXkWRsL5HxqXHP7", // ✨ Contoh Link Asli (Share Link)
  },
  {
    id: "2",
    name: "Pasirian",
    address: "Jl. Raya Pasirian No.55. Kedung Pakis, Pasirian, Kec. Pasirian, Kabupaten Lumajang, Jawa Timur 67372",
    lat: -8.2333,
    lng: 113.1167,
    googleMapsUrl: "https://maps.app.goo.gl/JfUJgoHSLeL7UXHaA", // ✨ Contoh Link Asli (Share Link)
  },
  {
    id: "3",
    name: "Tempeh",
    address: "Dusun Krajan, Tempeh Lor, Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371",
    lat: -8.1833,
    lng: 113.1667,
    googleMapsUrl: "https://maps.app.goo.gl/uzRrpk5svQLonQ2i9", // Ganti dengan link asli nanti
  },
  {
    id: "4",
    name: "Senduro",
    address: "JL. P.B Sudirman, Juranglangak, Senduro, Kec. Senduro, Kabupaten Lumajang, Jawa Timur 67361",
    lat: -8.1,
    lng: 113.1,
    googleMapsUrl: "https://maps.app.goo.gl/nsWNke5ECBfHUJV37", // Ganti dengan link asli nanti
  },
  {
    id: "5",
    name: "Kencong",
    address: "Jl. Diponegoro No.133. Kamaran, Kencong, Kec. Kencong, Kabupaten Jember, Jawa Timur 68167",
    lat: -8.2667,
    lng: 113.3667,
    googleMapsUrl: "https://maps.app.goo.gl/22eipuCs5YoyHRJv9", // Ganti dengan link asli nanti
  },
  {
    id: "6",
    name: "Yosowilangun",
    address: "Jombang, Yosowilangun Lor, Kec. Yosowilangun. Kabupaten Lumajang, Jawa Timur",
    lat: -8.2333,
    lng: 113.3167,
    googleMapsUrl: "https://maps.app.goo.gl/BxReFMcFCdUVpTu4A", // Ganti dengan link asli nanti
  },
  {
    id: "7",
    name: "Klakah",
    address: "Linuboyo, Klakah, Kec. Klakah, Kabupaten Lumajang, Jawa Timur",
    lat: -7.9833,
    lng: 113.25,
    googleMapsUrl: "https://maps.app.goo.gl/LY1wcsyL4EyUkEJW6", // Ganti dengan link asli nanti
  },
  {
    id: "8",
    name: "Jatiroto",
    address: "Umbulsari, Kaliboto Kidul, Jatiroto, Kabupaten Lumajang, Jawa Timur 67355",
    lat: -8.1167,
    lng: 113.3667,
    googleMapsUrl: "https://maps.app.goo.gl/942HisLjLtsHw5Wc8", // Ganti dengan link asli nanti
  },
];
