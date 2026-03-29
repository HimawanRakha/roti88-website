export type Feature = {
  title: string;
  desc: string;
  icon: "truck" | "heart" | "box" | "check";
};

export const features: Feature[] = [
  {
    title: "Gratis Antar",
    desc: "ROTI 88 menyediakan layanan gratis antar ke seluruh area Lumajang.",
    icon: "truck",
  },
  {
    title: "Fresh From Oven",
    desc: "Diproduksi fresh from oven setiap hari untuk menjaga kesegaran dan kualitas rasa yang konsisten",
    icon: "heart",
  },
  {
    title: "Varian",
    desc: "ROTI 88 menghadirkan lebih dari 50++ varian roti, tersedia mulai dari Rp 3.500",
    icon: "box",
  },
  {
    title: "Halal",
    desc: "ROTI 88 menggunakan bahan yang terjamin dan telah bersertifikasi halal",
    icon: "check",
  },
];
