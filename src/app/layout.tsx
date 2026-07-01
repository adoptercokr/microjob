import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micro Job - 동네 마이크로 단기 알바",
  description: "내가 원하는 시간, 내 주변 일자리 찾기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50 text-gray-900 pb-16 md:pb-0`}>
        <div className="w-full min-h-screen relative flex flex-col">
          {/* Main Content Area (padding top for desktop nav) */}
          <div className="flex-1 w-full mx-auto pt-0 md:pt-16 pb-safe">
            {children}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
