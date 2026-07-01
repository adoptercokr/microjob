import Header from "@/components/Header";

export default function MapPage() {
  return (
    <main className="h-[100dvh] md:min-h-screen flex flex-col w-full relative">
      <Header title="내 주변 일자리" />
      <div className="flex-1 relative bg-gray-200 w-full h-full overflow-hidden">
        {/* 네이버 지도 영역 (임시 플레이스홀더) */}
        <div className="absolute inset-0 bg-gray-300 flex flex-col items-center justify-center relative">
          <svg className="w-16 h-16 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          <span className="text-gray-500 font-bold">지도 API 연동 예정</span>
          
          {/* 마커 목업 */}
          <div className="absolute top-1/3 left-1/3 w-14 h-14 bg-white rounded-full shadow-lg border-2 border-blue-500 flex items-center justify-center flex-col animate-bounce cursor-pointer hover:scale-110 transition-transform">
            <span className="text-[10px] font-black text-blue-600">GS25</span>
            <span className="text-[9px] font-bold text-gray-500">1.3만</span>
          </div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-red-500 flex items-center justify-center flex-col cursor-pointer hover:scale-110 transition-transform">
            <span className="text-[10px] font-black text-red-600">식당</span>
            <span className="text-[9px] font-bold text-gray-500">1.5만</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Sheet - Mobile: bottom fixed, PC: Floating Card on left */}
      <div className="absolute bottom-16 md:bottom-auto md:top-24 md:left-8 w-full md:w-[420px] bg-white rounded-t-3xl md:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl p-6 z-10 transition-transform pb-safe">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5 md:hidden"></div>
        <h2 className="font-black text-gray-900 text-xl mb-4">현재 화면 내 알바 <span className="text-blue-600">2건</span></h2>
        
        <div className="space-y-3 mb-2 max-h-[40vh] md:max-h-[60vh] overflow-y-auto hide-scrollbar">
          <div className="p-5 border-2 border-blue-500 bg-blue-50 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-lg">급구</span>
              <span className="text-gray-400 text-xs font-bold">100m</span>
            </div>
            <h3 className="font-black text-gray-900 mb-1.5 text-lg">GS25 강남대로점 야간물류</h3>
            <div className="flex justify-between items-end mt-3 border-t border-blue-100 pt-3">
              <span className="text-xs text-gray-500 font-bold">오늘 23:00~02:00</span>
              <span className="font-black text-blue-600 text-xl">13,000<span className="text-sm font-bold text-gray-500">원</span></span>
            </div>
          </div>
          
          <div className="p-5 border border-gray-200 bg-white rounded-2xl shadow-sm cursor-pointer hover:border-gray-300 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-2">
              <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs font-black rounded-lg">초보가능</span>
              <span className="text-gray-400 text-xs font-bold">350m</span>
            </div>
            <h3 className="font-black text-gray-900 mb-1.5 text-lg">본죽 역삼점 저녁 서빙보조</h3>
            <div className="flex justify-between items-end mt-3 border-t border-gray-100 pt-3">
              <span className="text-xs text-gray-500 font-bold">오늘 18:00~20:00</span>
              <span className="font-black text-gray-800 text-xl">15,000<span className="text-sm font-bold text-gray-500">원</span></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
