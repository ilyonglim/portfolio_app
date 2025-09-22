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
  title: "포트폴리오 | 웹 기획자 & 디지털 크리에이터",
  description: "창의적인 웹 기획과 디지털 크리에이션으로 사용자 경험을 혁신하는 포트폴리오입니다.",
  keywords: ["포트폴리오", "웹 기획", "디지털 크리에이터", "UX/UI", "프론트엔드"],
  authors: [{ name: "포트폴리오" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
