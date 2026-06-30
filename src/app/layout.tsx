import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micro Job - 타임블록 기반 초단기 알바",
  description: "내가 원하는 시간, 내 주변 일자리 찾기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-xl overflow-x-hidden pb-16">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
