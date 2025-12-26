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
  title: "Redwall | Yangın Danışmanlık, Mühendislik ve Uygulama",
  description: "Redwall Yangın Danışmanlık, Mühendislik ve Uygulama - 20 yılı aşkın tecrübemizle yangın güvenliği konusunda A'dan Z'ye tüm süreçlerde yanınızdayız.",
  keywords: ["yangın güvenliği", "yangın danışmanlık", "yangın mühendisliği", "sprinkler", "yangın algılama", "yangın söndürme", "redwall"],
  authors: [{ name: "Redwall" }],
  openGraph: {
    title: "Redwall | Yangın Danışmanlık, Mühendislik ve Uygulama",
    description: "20 yılı aşkın tecrübemizle yangın güvenliği konusunda A'dan Z'ye tüm süreçlerde yanınızdayız.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
