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
  title: "AKSI - Akar Sistem",
  description: "Konsultan digitalisasi UMKM Indonesia. Kami tidak hanya mendigitalkan bisnis Anda — kami menanamkan fondasinya.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AKSI - Akar Sistem",
    description: "Konsultan digitalisasi UMKM Indonesia. Kami tidak hanya mendigitalkan bisnis Anda — kami menanamkan fondasinya.",
    url: "https://www.akarsistem.biz.id/",
    siteName: "AKSI - Akar Sistem",
    images: [{ url: "https://www.akarsistem.biz.id/akarsistemlogo.png", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
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
