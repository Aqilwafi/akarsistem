import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akarsistem.biz.id/"),
  
  // Title: ~57 Karakter (Target optimal: 50-60)
  title: "AKSI - Konsultan Digitalisasi & Sistem Bisnis UMKM Indonesia",
  
  // Description: ~156 Karakter (Target optimal: 150-160)
  description:
    "Konsultan digitalisasi UMKM Indonesia. AKSI membantu membangun sistem bisnis digital yang aman, stabil, dan berkelanjutan. Konsultasi gratis sekarang!",
  
  keywords: [
    "Konsultan Digitalisasi UMKM",
    "Sistem Bisnis UMKM",
    "Transformasi Digital Indonesia",
    "Keamanan Sistem Bisnis",
    "AKSI Akar Sistem",
    'Akar Sistem',
    'AKSI',
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "AKSI - Konsultan Digitalisasi & Sistem Bisnis UMKM Indonesia",
    description:
      "Konsultan digitalisasi UMKM Indonesia. AKSI membantu membangun sistem bisnis digital yang aman, stabil, dan berkelanjutan. Konsultasi gratis sekarang!",
    url: "https://www.akarsistem.biz.id/",
    siteName: "AKSI - Akar Sistem",
    images: [
      {
        url: "https://www.akarsistem.biz.id/akarsistemlogo.png",
        width: 1200,
        height: 630,
        alt: "AKSI - Akar Sistem Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AKSI - Konsultan Digitalisasi & Sistem Bisnis UMKM Indonesia",
    description:
      "Konsultan digitalisasi UMKM Indonesia. AKSI membantu membangun sistem bisnis digital yang aman, stabil, dan berkelanjutan. Konsultasi gratis sekarang!",
    images: ["https://www.akarsistem.biz.id/akarsistemlogo.png"],
  },

  alternates: {
    canonical: "https://www.akarsistem.biz.id/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
