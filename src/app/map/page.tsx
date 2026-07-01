import Header from "@/components/Header";
import dynamic from 'next/dynamic';

// SSR 비활성화로 Leaflet 로드
const MapWithNoSSR = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100 font-bold text-gray-500">지도 데이터를 불러오는 중입니다...</div>
});

export default function MapPage() {
  return (
    <main className="h-[100dvh] md:min-h-screen flex flex-col w-full relative">
      <Header title="내 주변 일자리" />
      <div className="flex-1 relative bg-gray-200 w-full h-full z-0">
        <MapWithNoSSR />
      </div>
      
      {/* Bottom Sheet - Mobile: bottom fixed, PC: Floating Card on left */}
      <div className="absolute bottom-[64px] md:bottom-auto md:top-24 md:left-8 w-full md:w-[420px] bg-white rounded-t-3xl md:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl p-6 z-10 transition-transform pb-safe">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5 md:hidden"></div>
        <h2 className="font-black text-gray-900 text-xl mb-4">현재 지도 내 알바 <span className="text-blue-600">2건</span></h2>
        
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
