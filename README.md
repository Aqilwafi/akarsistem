# AKSI · Akar Sistem

[![Deploy](https://img.shields.io/badge/live-vercel-black?style=flat&logo=vercel)](https://akarsistem-staging.vercel.app)

> Landing page untuk **AKSI (Akar Sistem)** — konsultan digitalisasi UMKM Indonesia yang membantu bisnis tumbuh dengan fondasi yang kuat, bukan sekadar tampilan.

---

## Tentang Proyek

AKSI hadir karena banyak UMKM memulai digitalisasi tanpa pemahaman yang cukup — ikut-ikutan tren, tertekan kompetitor, atau tergoda janji manis vendor. Hasilnya: sistem mahal yang rapuh dan tidak sesuai kapasitas.

Landing page ini menampilkan filosofi dan metodologi AKSI: tiga pilar keseimbangan (Keamanan, Kenyamanan, Kapabilitas) dan pendekatan *conscious trade-off* yang membedakan AKSI dari konsultan digital biasa.

---

## Tech Stack

| Lapisan | Teknologi |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + Custom Properties |
| Font | DM Serif Display · DM Sans (Google Fonts) |
| Image | `next/image` dengan optimasi otomatis |
| Deployment | [Vercel](https://akarsistem-staging.vercel.app) |

---

## Struktur Folder

```
app/
├── aksi.css                  # Semua styles global halaman
├── page.tsx                  # Server Component — entry point halaman
├── layout.tsx                # Root layout (default Next.js)
└── components/
    ├── NavClient.tsx         # Navbar dengan scroll-aware state
    ├── PillarCard.tsx        # Kartu pilar dengan animasi IntersectionObserver
    └── AksiStep.tsx          # Langkah metodologi AKSI dengan animasi scroll

public/
└── akarsistemlogo.png        # Hero image
```

**Prinsip arsitektur:** semua komponen adalah Server Component secara default. Hanya tiga komponen yang menggunakan `"use client"` — dan hanya karena mereka membutuhkan API browser (`window.scrollY`, `IntersectionObserver`).

---

## Menjalankan Secara Lokal

**Prasyarat:** Node.js 18+ dan npm/yarn/pnpm.

```bash
# 1. Clone repo
git clone https://github.com/username/aksi-akar-sistem.git
cd aksi-akar-sistem

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Scripts

```bash
npm run dev      # Development server dengan hot reload
npm run build    # Build production
npm run start    # Jalankan hasil build
npm run lint     # Cek kode dengan ESLint
```

---

## Desain & Keputusan Teknis

**Server-first rendering** — `page.tsx` tidak memiliki `"use client"`, sehingga seluruh HTML dirender di server. Ini mempercepat First Contentful Paint dan baik untuk SEO.

**CSS tanpa library** — styling menggunakan native CSS dengan custom properties (`var(--gold)`, `var(--bg)`, dsb.), tanpa Tailwind atau styled-components. Hasilnya lebih ringan dan mudah dikustomisasi.

**Animasi berbasis scroll** — `PillarCard` dan `AksiStep` menggunakan `IntersectionObserver` untuk memicu animasi saat elemen masuk viewport, tanpa library animasi eksternal.

**Optimasi gambar** — hero image menggunakan `next/image` dengan prop `priority` dan `sizes` yang tepat karena terdeteksi sebagai Largest Contentful Paint (LCP).

---

## Lisensi

Proyek ini dibuat untuk keperluan portofolio pribadi. Tidak untuk didistribusikan atau digunakan secara komersial tanpa izin.

---

*Dibuat dengan teliti — karena fondasi yang baik tidak terlihat, tapi selalu terasa.*