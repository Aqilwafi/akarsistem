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
  title: "AKSI · Akar Sistem",
  description:
    "Konsultan digitalisasi UMKM Indonesia. Kami tidak hanya mendigitalkan bisnis Anda — kami menanamkan fondasinya.",
  metadataBase: new URL("https://akarsistem-staging.vercel.app"), // ganti dengan domain asli
  openGraph: {
    title: "AKSI · Akar Sistem",
    description:
      "Konsultan digitalisasi UMKM Indonesia. Kami tidak hanya mendigitalkan bisnis Anda — kami menanamkan fondasinya.",
    url: "https://akarsistem-staging.vercel.app/",
    siteName: "AKSI · Akar Sistem",
    images: [{ url: "/akarsistemlogo.png", width: 1200, height: 630, alt: "AKSI · Akar Sistem" }],
    locale: "id_ID",
    type: "website",
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
