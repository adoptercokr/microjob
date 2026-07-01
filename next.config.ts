import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // 좌측 하단 정적 라우트 표시기 숨김 (Next.js 15+)
    buildActivity: false, // 우측 하단 빌드 표시기 숨김
  },
};

export default nextConfig;
