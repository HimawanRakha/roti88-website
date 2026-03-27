# ROTI 88 Website

Website resmi ROTI 88 Lumajang — Fresh from oven everyday!

Built with **Next.js 14**, **TypeScript**, dan **Tailwind CSS**.  
Design by Figma (Desktop - 12).

---

## 🎨 Design Tokens (dari Figma)

| Token | Nilai | Dipakai di |
|---|---|---|
| Primary | `#FF7900` | Background hero, buttons, icons |
| Secondary | `#632721` | Navbar bg, button dark, secondary card |
| Accent | `#FFF800` | Teks "ROTI" di hero, logo |
| Dark | `#231709` | Teks utama, footer bg |
| Font Heading | `DM Serif Display` | Judul besar, "ROTI" |
| Font Lora | `Lora` | Navbar links, buttons, label |
| Font Inter | `Inter` | Body text, deskripsi |

---

## 🚀 Setup dari Nol — Step by Step

### Step 1: Install Node.js

Pastikan Node.js **v18+** sudah terinstall.

```bash
node -v   # harus v18 atau lebih baru
npm -v
```

Kalau belum ada, download di: https://nodejs.org

---

### Step 2: Buat project Next.js (jika mulai dari awal)

> **Skip step ini** jika kamu menggunakan folder `roti88` yang sudah ada.

```bash
npx create-next-app@14 roti88-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```

---

### Step 3: Masuk ke folder project

```bash
cd roti88
```

(atau nama folder kamu)

---

### Step 4: Install semua dependencies

```bash
npm install
```

Ini akan install:
- `next` — framework
- `react` & `react-dom` — library utama
- `lucide-react` — ikon (truck, phone, map-pin, dll)
- `tailwindcss`, `postcss`, `autoprefixer` — styling

---

### Step 5: Pastikan struktur folder seperti ini

```
roti88/
├── app/
│   ├── globals.css       ← import Google Fonts + Tailwind
│   ├── layout.tsx        ← metadata & root layout
│   └── page.tsx          ← assembles semua section
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Promo.tsx
│   ├── CTA.tsx
│   ├── Outlet.tsx
│   └── Footer.tsx
├── public/               ← taruh foto produk di sini
├── tailwind.config.ts    ← design tokens dari Figma
├── package.json
└── tsconfig.json
```

---

### Step 6: Jalankan development server

```bash
npm run dev
```

Buka browser: **http://localhost:3000**

Website langsung berjalan! 🎉

---

### Step 7: Tambahkan foto produk (opsional)

1. Taruh gambar ke folder `/public/images/`  
   Contoh: `roti-manis.jpg`, `cake.jpg`, dll.

2. Gunakan di komponen dengan:
   ```tsx
   import Image from "next/image";

   <Image
     src="/images/roti-manis.jpg"
     alt="Roti Manis"
     width={300}
     height={300}
     className="rounded-2xl object-cover"
   />
   ```

---

### Step 8: Kustomisasi konten

Edit file-file di `components/` sesuai kebutuhan:

| File | Isi yang bisa diubah |
|---|---|
| `Navbar.tsx` | Nama brand, link navigasi |
| `Hero.tsx` | Tagline, teks hero, nomor telepon |
| `About.tsx` | Deskripsi, statistik (tahun, cabang, pelanggan) |
| `Products.tsx` | Nama & deskripsi produk |
| `Promo.tsx` | Teks promo aktif |
| `CTA.tsx` | Nomor WhatsApp admin |
| `Outlet.tsx` | Nama & alamat setiap outlet |
| `Footer.tsx` | Link sosial media, copyright |

---

### Step 9: Build untuk production

```bash
npm run build
npm run start
```

---

### Step 10: Deploy ke Vercel (gratis & mudah)

1. Push ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "init: roti88 website"
   git remote add origin https://github.com/username/roti88.git
   git push -u origin main
   ```

2. Buka https://vercel.com → Import project dari GitHub

3. Klik **Deploy** — selesai! Vercel otomatis mendeteksi Next.js.

Website akan live di URL seperti: `https://roti88.vercel.app`

---

## 🔧 Kustomisasi Warna & Font

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: "#FF7900",    // ganti warna orange
  secondary: "#632721",  // ganti warna coklat
  accent: "#FFF800",     // ganti warna kuning
  dark: "#231709",       // ganti warna gelap
},
fontFamily: {
  serif: ["DM Serif Display", "Georgia", "serif"],
  lora: ["Lora", "Georgia", "serif"],
  sans: ["Inter", "system-ui", "sans-serif"],
},
```

---

## 📞 Kontak

WhatsApp: **082228333485** (Admin)  
Instagram: **@roti88.lumajang**
